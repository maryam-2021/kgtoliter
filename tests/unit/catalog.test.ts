import assert from 'node:assert/strict';
import test from 'node:test';
import {
  batchConvertCatalog,
  calculateCatalogVolume,
  catalogItems,
  getCatalogItem,
  searchCatalog,
} from '../../src/data/catalog';

test('catalog exposes a stable unique key for every record', () => {
  assert.ok(catalogItems.length > 700);
  assert.equal(new Set(catalogItems.map((item) => item.catalogKey)).size, catalogItems.length);
});

test('legacy aliases retain documented conversion behavior', () => {
  assert.equal(getCatalogItem('water')?.id, 'water-pure');
  assert.equal(calculateCatalogVolume(10, 'water'), 10);
  assert.ok(Math.abs((calculateCatalogVolume(10, 'diesel') ?? 0) - 12.0192307692) < 1e-9);
});

test('catalog search and category filters compose', () => {
  const result = searchCatalog('diesel', { category: 'petroleum' });
  assert.ok(result.count > 0);
  assert.ok(result.results.every((item) => item.category === 'petroleum'));
});

test('batch conversion skips unknown IDs and returns known substances', () => {
  const results = batchConvertCatalog(['water', 'diesel', 'does-not-exist'], 5);
  assert.equal(results.length, 2);
  assert.equal(results[0]?.volume, 5);
});
