export const PRODUCTION_ORIGIN = 'https://kgtoliter.com';

const DATABASE_PATH = '/data/substances.json';

export let MASTER_DATABASE = [];

let databaseRequest;

function isCatalogRecord(value) {
  return (
    value &&
    typeof value.catalogKey === 'string' &&
    typeof value.name === 'string' &&
    typeof value.category === 'string' &&
    typeof value.categorySlug === 'string' &&
    Number.isFinite(value.density) &&
    value.density > 0
  );
}

export function loadMasterDatabase() {
  if (databaseRequest) return databaseRequest;

  databaseRequest = (async () => {
    const sameOriginUrl = new URL(DATABASE_PATH, window.location.href);
    const productionUrl = new URL(DATABASE_PATH, PRODUCTION_ORIGIN);
    const candidates =
      sameOriginUrl.href === productionUrl.href ? [sameOriginUrl] : [sameOriginUrl, productionUrl];
    let lastError;

    for (const url of candidates) {
      try {
        const response = await fetch(url, { headers: { Accept: 'application/json' } });
        if (!response.ok) {
          throw new Error(`Database request failed with status ${response.status}`);
        }
        const records = await response.json();
        if (!Array.isArray(records) || records.length === 0 || !records.every(isCatalogRecord)) {
          throw new Error('The substance database response is invalid.');
        }
        MASTER_DATABASE = records;
        return MASTER_DATABASE;
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  })().catch((error) => {
    databaseRequest = undefined;
    throw error;
  });

  return databaseRequest;
}
