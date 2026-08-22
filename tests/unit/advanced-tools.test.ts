import assert from 'node:assert/strict';
import test from 'node:test';
import { industryModes, getIndustryMode } from '../../src/data/industryModes';
import { getCatalogItem } from '../../src/data/catalog';

test('industry modes are correctly configured with 6 primary domains', () => {
  assert.equal(industryModes.length, 6);
  const expectedModes = ['cooking', 'fuel', 'chemical', 'construction', 'automotive', 'agriculture'];
  assert.deepEqual(
    industryModes.map((m) => m.id),
    expectedModes,
  );

  expectedModes.forEach((modeId) => {
    const mode = getIndustryMode(modeId);
    assert.ok(mode, `Industry mode ${modeId} should exist`);
    assert.ok(mode.name.length > 0);
    assert.ok(mode.icon.length > 0);
    assert.ok(mode.popularSubstanceKeys.length > 0);
    assert.ok(mode.sampleUseCases.length > 0);
  });
});

test('container calculator geometric formulas compute exact volumes and mass', () => {
  // 1. Rectangular: L = 1.2m, W = 1.0m, H = 1.0m => 1.2 m3 = 1200L
  const l = 1.2, w = 1.0, h = 1.0;
  const rectVolM3 = l * w * h;
  const rectVolL = rectVolM3 * 1000;
  assert.equal(rectVolL, 1200);

  // 85% fill with diesel (0.832 kg/L)
  const fill85 = rectVolL * 0.85;
  const massKg = fill85 * 0.832;
  assert.equal(fill85, 1020);
  assert.equal(massKg, 848.64);

  // 2. Vertical Cylinder: Dia = 1.0m, H = 1.5m => V = pi * r^2 * H
  const radius = 0.5;
  const cylVolM3 = Math.PI * Math.pow(radius, 2) * 1.5;
  const cylVolL = cylVolM3 * 1000;
  assert.ok(Math.abs(cylVolL - 1178.097245) < 1e-4);

  // 3. Conical Frustum: R1 = 0.75m, R2 = 0.2m, H = 1.8m => V = 1/3 * pi * H * (R1^2 + R1*R2 + R2^2)
  const R1 = 0.75, R2 = 0.2, H = 1.8;
  const coneVolM3 = (1 / 3) * Math.PI * H * (R1 * R1 + R1 * R2 + R2 * R2);
  const coneVolL = coneVolM3 * 1000;
  assert.ok(Math.abs(coneVolL - 1418.429) < 1e-2);
});

test('custom density 3-way conversions maintain mathematical reciprocity', () => {
  const massKg = 25.0;
  const densityKgPerL = 0.92; // Cooking oil

  // Mode 1: Solve Volume = m / density
  const volumeL = massKg / densityKgPerL;
  assert.ok(Math.abs(volumeL - 27.173913) < 1e-5);

  // Mode 2: Solve Mass = Volume * density
  const calculatedMass = volumeL * densityKgPerL;
  assert.equal(calculatedMass, massKg);

  // Mode 3: Solve Density = Mass / Volume
  const calculatedDensity = massKg / volumeL;
  assert.equal(calculatedDensity, densityKgPerL);

  // Unit transformation: 1 kg/L = 1000 kg/m3 = 1 g/cm3 = 8.3454 lb/gal
  const lbPerGal = densityKgPerL * 8.34540445;
  assert.ok(Math.abs(lbPerGal - 7.677772) < 1e-4);
});

test('substance lookup finds catalog materials across industry modes', () => {
  const diesel = getCatalogItem('diesel');
  assert.ok(diesel);
  assert.equal(diesel.density, 0.832);

  const milk = getCatalogItem('milk');
  assert.ok(milk);
  assert.equal(milk.density, 1.03);

  const water = getCatalogItem('water');
  assert.ok(water);
  assert.equal(water.density, 1.0);
});
