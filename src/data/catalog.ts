import { SUBSTANCE_DATABASE, categories, type DensityRange } from './substances';

export interface CatalogItem {
  id: string;
  catalogKey: string;
  name: string;
  category: string;
  categoryLabel: string;
  categorySlug: string;
  density: number;
  densityRange: DensityRange | null;
  temperature: number;
  source: string;
  notes: string;
}

export interface CatalogSearchFilters {
  category?: string;
  minDensity?: number;
  maxDensity?: number;
}

const categoryById = new Map(categories.map((category) => [category.id, category]));
const idOccurrences = new Map<string, number>();
const legacyAliases: Record<string, string> = {
  water: 'water-pure',
  milk: 'milk-beverage',
  diesel: 'diesel-2',
  petrol: 'gasoline-87',
  'cooking-oil': 'vegetable-oil',
  flour: 'flour-all-purpose',
};

// The comprehensive database is the canonical source used by the site and API.
// catalogKey keeps legacy duplicate IDs addressable without changing their source IDs.
export const catalogItems: CatalogItem[] = SUBSTANCE_DATABASE.map((item) => {
  const occurrence = (idOccurrences.get(item.id) ?? 0) + 1;
  idOccurrences.set(item.id, occurrence);
  const category = categoryById.get(item.category);

  return {
    ...item,
    catalogKey: occurrence === 1 ? item.id : `${item.id}--${item.category}-${occurrence}`,
    categoryLabel: category?.name ?? item.category,
    categorySlug: category?.slug ?? item.category,
  };
});

export function searchCatalog(query = '', filters: CatalogSearchFilters = {}) {
  const normalizedQuery = query.toLowerCase().trim();
  let results = catalogItems;

  if (normalizedQuery) {
    results = results.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.notes.toLowerCase().includes(normalizedQuery) ||
        item.source.toLowerCase().includes(normalizedQuery) ||
        item.categoryLabel.toLowerCase().includes(normalizedQuery),
    );
  }

  if (filters.category && filters.category !== 'all') {
    results = results.filter((item) => item.category === filters.category);
  }
  if (filters.minDensity !== undefined) {
    results = results.filter((item) => item.density >= filters.minDensity!);
  }
  if (filters.maxDensity !== undefined) {
    results = results.filter((item) => item.density <= filters.maxDensity!);
  }

  return {
    results,
    count: results.length,
    averageDensity:
      results.reduce((total, item) => total + item.density, 0) / (results.length || 1),
  };
}

export function getCatalogItem(idOrKey: string): CatalogItem | null {
  const resolvedId = legacyAliases[idOrKey] ?? idOrKey;
  return (
    catalogItems.find((item) => item.catalogKey === resolvedId) ??
    catalogItems.find((item) => item.id === resolvedId) ??
    null
  );
}

export function getCatalogStats() {
  const stats: Record<string, { count: number; minDensity: number; maxDensity: number }> = {};

  for (const item of catalogItems) {
    const current = stats[item.category] ?? {
      count: 0,
      minDensity: Infinity,
      maxDensity: -Infinity,
    };
    current.count += 1;
    current.minDensity = Math.min(current.minDensity, item.density);
    current.maxDensity = Math.max(current.maxDensity, item.density);
    stats[item.category] = current;
  }

  return stats;
}

export function calculateCatalogVolume(massKg: number, idOrKey: string): number | null {
  const item = getCatalogItem(idOrKey);
  return item && item.density > 0 ? massKg / item.density : null;
}

export function batchConvertCatalog(idsOrKeys: string[], massKg = 1) {
  return idsOrKeys.flatMap((idOrKey) => {
    const item = getCatalogItem(idOrKey);
    return item
      ? [
          {
            id: item.id,
            catalogKey: item.catalogKey,
            name: item.name,
            mass: massKg,
            volume: massKg / item.density,
            density: item.density,
            category: item.categoryLabel,
          },
        ]
      : [];
  });
}

export function masterSearch(query: string) {
  return searchCatalog(query).results;
}

export function masterFilterByCategory(category: string) {
  return searchCatalog('', { category }).results;
}

export function getCategoryDensityRange(category: string) {
  const items = masterFilterByCategory(category);
  if (items.length === 0) return null;
  const densities = items.map((item) => item.density);
  const min = Math.min(...densities);
  const max = Math.max(...densities);
  return { min, max, range: (max - min).toFixed(3) };
}

export function getMasterSummary() {
  const densities = catalogItems.map((item) => item.density);
  return {
    totalSubstances: catalogItems.length,
    totalCategories: new Set(catalogItems.map((item) => item.category)).size,
    averageDensity: (
      densities.reduce((total, density) => total + density, 0) / densities.length
    ).toFixed(3),
    densityRange: {
      min: Math.min(...densities),
      max: Math.max(...densities),
    },
  };
}

// Compatibility names used by the existing REST server.
export const masterSearchInterface = searchCatalog;
export const masterLookup = getCatalogItem;
export const masterVolume = calculateCatalogVolume;
export const masterBatchConvert = batchConvertCatalog;
export const getMasterStats = getCatalogStats;
