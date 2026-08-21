const DATABASE_URL = '/data/substances.json';

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

  databaseRequest = fetch(DATABASE_URL, { headers: { Accept: 'application/json' } })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Database request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then((records) => {
      if (!Array.isArray(records) || records.length === 0 || !records.every(isCatalogRecord)) {
        throw new Error('The substance database response is invalid.');
      }
      MASTER_DATABASE = records;
      return MASTER_DATABASE;
    })
    .catch((error) => {
      databaseRequest = undefined;
      throw error;
    });

  return databaseRequest;
}
