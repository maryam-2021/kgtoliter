import type { CatalogItem } from '../data/catalog';

declare global {
  interface Window {
    __substancesCatalogPromise?: Promise<CatalogItem[]>;
    __substancesCatalogData?: CatalogItem[];
  }
}

/**
 * Loads the 772+ substances catalogue lazily with in-memory caching and request deduplication.
 * Ensures /data/substances.json is fetched at most once across the entire page lifecycle.
 */
export function loadSubstancesCatalog(): Promise<CatalogItem[]> {
  if (typeof window === 'undefined') {
    return Promise.resolve([]);
  }

  if (window.__substancesCatalogData) {
    return Promise.resolve(window.__substancesCatalogData);
  }

  if (window.__substancesCatalogPromise) {
    return window.__substancesCatalogPromise;
  }

  window.__substancesCatalogPromise = fetch('/data/substances.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch catalog: ${response.status}`);
      }
      return response.json() as Promise<CatalogItem[]>;
    })
    .then((data) => {
      window.__substancesCatalogData = data;
      return data;
    })
    .catch((error) => {
      delete window.__substancesCatalogPromise;
      throw error;
    });

  return window.__substancesCatalogPromise;
}
