// ============================================
// REST API v1.0
// ============================================

import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import {
  masterSearchInterface,
  masterLookup,
  masterVolume,
  masterBatchConvert,
  getMasterStats,
} from './src/data/catalog.ts';
import { ConstructionCalculators } from './src/data/constructionCalculators.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ----- API Routes -----

// Get API Status & Metadata
app.get('/api', (_req, res) => {
  res.json({
    name: 'KgToLitre Master REST API',
    version: '1.0.0',
    stats: getMasterStats(),
    endpoints: [
      'GET /api/substances',
      'GET /api/substances/:id',
      'GET /api/categories',
      'GET /api/convert/:id/:mass',
      'POST /api/convert',
      'GET /api/search/:query',
      'GET /api/calculate/:type',
      'POST /api/convert/batch',
      'POST /api/submissions',
    ],
  });
});

// Get all substances with pagination, search, and category filtering
app.get('/api/substances', (req, res) => {
  const { page = 1, limit = 50, category, search, minDensity, maxDensity } = req.query;

  const searchFilters = {
    category: category || 'all',
    minDensity: minDensity ? parseFloat(minDensity) : undefined,
    maxDensity: maxDensity ? parseFloat(maxDensity) : undefined,
  };

  const searchResult = masterSearchInterface(search || '', searchFilters);
  const results = searchResult.results;

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum;

  res.json({
    total: searchResult.count,
    averageDensity: searchResult.averageDensity,
    page: pageNum,
    totalPages: Math.ceil(searchResult.count / limitNum),
    data: results.slice(startIndex, endIndex),
  });
});

// Get substance by ID
app.get('/api/substances/:id', (req, res) => {
  const substance = masterLookup(req.params.id);
  if (!substance) {
    return res.status(404).json({ error: 'Substance not found' });
  }
  res.json(substance);
});

// Get all categories
app.get('/api/categories', (_req, res) => {
  const stats = getMasterStats();
  const categories = Object.entries(stats).map(([id, categoryStats]) => ({
    id,
    ...categoryStats,
  }));

  res.json({
    totalCategories: categories.length,
    totalSubstances: categories.reduce((total, category) => total + category.count, 0),
    densityRange: {
      min: Math.min(...categories.map((category) => category.minDensity)),
      max: Math.max(...categories.map((category) => category.maxDensity)),
    },
    categories,
  });
});

// Convert mass to volume (GET endpoint)
app.get('/api/convert/:id/:mass', (req, res) => {
  const { id, mass } = req.params;
  const massKg = parseFloat(mass);
  if (isNaN(massKg)) {
    return res.status(400).json({ error: 'mass must be a valid number' });
  }
  const volume = masterVolume(massKg, id);
  if (volume === null) {
    return res.status(404).json({ error: 'Substance not found' });
  }
  const substance = masterLookup(id);
  res.json({
    substanceId: id,
    substanceName: substance ? substance.name : id,
    massKg: massKg,
    volumeLiters: volume,
    density: substance ? substance.density : null,
  });
});

// Convert mass to volume (POST endpoint)
app.post('/api/convert', (req, res) => {
  const { substanceId, massKg } = req.body;
  if (!substanceId || massKg === undefined) {
    return res.status(400).json({ error: 'substanceId and massKg are required' });
  }
  const volume = masterVolume(massKg, substanceId);
  if (volume === null) {
    return res.status(404).json({ error: 'Substance not found' });
  }
  res.json({
    substanceId,
    massKg,
    volumeLiters: volume,
  });
});

// Search substances
app.get('/api/search/:query', (req, res) => {
  const { query } = req.params;
  const searchResult = masterSearchInterface(query || '', {});
  res.json({
    query: query,
    total: searchResult.count,
    results: searchResult.results,
  });
});

// Batch convert multiple substances
app.post('/api/convert/batch', (req, res) => {
  const { substances, massKg = 1 } = req.body;
  if (!Array.isArray(substances)) {
    return res.status(400).json({ error: 'substances must be an array of IDs' });
  }
  const results = masterBatchConvert(substances, massKg);
  res.json({
    count: results.length,
    massKg: massKg,
    results: results,
  });
});

// Run Calculator by Type (GET & POST)
app.all(['/api/calculate/:type', '/api/calculators/:type'], (req, res) => {
  const type = req.params.type.toLowerCase();
  const params = req.method === 'POST' ? req.body : req.query;

  try {
    let result;
    if (type === 'beam') {
      result = ConstructionCalculators.structural.beamAnalysis({
        beamLength: parseFloat(params.beamLength) || 6,
        loadType: params.loadType || 'point',
        loadMagnitude: parseFloat(params.loadMagnitude) || 20,
        supportType: params.supportType || 'simply-supported',
        beamWidth: parseFloat(params.beamWidth) || 0.2,
        beamHeight: parseFloat(params.beamHeight) || 0.4,
        materialModulus: 210,
      });
    } else if (type === 'column') {
      result = ConstructionCalculators.structural.columnAnalysis({
        columnHeight: parseFloat(params.columnHeight) || 3,
        crossSectionWidth: parseFloat(params.colWidth || params.crossSectionWidth) || 0.3,
        crossSectionDepth: parseFloat(params.colDepth || params.crossSectionDepth) || 0.3,
        concreteStrength: parseFloat(params.concreteStrength) || 30,
        steelYieldStrength: parseFloat(params.steelYield) || 400,
        rebarArea: parseFloat(params.rebarArea) || 10,
      });
    } else if (type === 'foundation') {
      result = ConstructionCalculators.structural.foundationBearing({
        soilType: params.soilType || 'clay',
        foundationWidth: parseFloat(params.foundationWidth) || 1.5,
        foundationLength: parseFloat(params.foundationLength) || 1.5,
        foundationDepth: parseFloat(params.foundationDepth) || 0.6,
        soilDensity: 1800,
        cohesion: parseFloat(params.cohesion) || 50,
        angleOfFriction: params.soilType === 'sand' ? 30 : 0,
        waterTableDepth: 10,
        loadVertical: parseFloat(params.verticalLoad) || 100,
        loadHorizontal: 0,
      });
    } else if (type === 'u-value' || type === 'uvalue') {
      result = ConstructionCalculators.thermal.uValueCalculator({
        layers: params.layers || [
          { material: 'Plasterboard', thickness: 0.013, conductivity: 0.16 },
          { material: 'Insulation', thickness: 0.1, conductivity: 0.035 },
          { material: 'Brick', thickness: 0.1, conductivity: 0.72 },
        ],
        insideTemp: parseFloat(params.insideTemp) || 20,
        outsideTemp: parseFloat(params.outsideTemp) || 0,
      });
    } else {
      return res.status(400).json({
        error: `Unknown calculator type '${type}'. Supported: beam, column, foundation, u-value`,
      });
    }
    res.json({ type, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Structural Beam Analysis API
app.post('/api/calculators/beam', (req, res) => {
  try {
    const result = ConstructionCalculators.structural.beamAnalysis(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Structural Column Capacity API
app.post('/api/calculators/column', (req, res) => {
  try {
    const result = ConstructionCalculators.structural.columnAnalysis(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Foundation Bearing Capacity API
app.post('/api/calculators/foundation', (req, res) => {
  try {
    const result = ConstructionCalculators.structural.foundationBearing(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Thermal U-Value Calculator API
app.post('/api/calculators/u-value', (req, res) => {
  try {
    const result = ConstructionCalculators.thermal.uValueCalculator(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User Substance Submission API
app.post('/api/submissions', (req, res) => {
  const { name, density, category } = req.body;
  if (!name || !density || !category) {
    return res.status(400).json({ error: 'name, density, and category are required' });
  }
  const submissionId = 'sub-' + Date.now();
  res.status(202).json({
    message: 'Submission validated but not stored',
    submissionId,
  });
});

export function startServer(port = PORT) {
  return app.listen(port, () =>
    console.log(`🚀 REST API v1.0 running on http://localhost:${port}`),
  );
}

const entryPath = process.argv[1] ? resolve(process.argv[1]) : '';
if (entryPath === fileURLToPath(import.meta.url)) {
  startServer();
}

export default app;
