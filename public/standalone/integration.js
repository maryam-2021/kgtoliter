import { loadMasterDatabase } from './database.js';

const MAX_DIRECTORY_ROWS = 100;
const comparisonKeys = [
  'water-pure',
  'diesel-2',
  'vegetable-oil',
  'milk-beverage',
  'honey-pure',
  'acetone',
  'glycerin',
  'sulfuric-acid-98',
];

const elements = {
  status: document.querySelector('#appStatus'),
  categories: document.querySelector('#categoriesGrid'),
  mass: document.querySelector('#massInput'),
  substance: document.querySelector('#substanceSelect'),
  result: document.querySelector('#resultValue'),
  density: document.querySelector('#densityDisplay'),
  temperature: document.querySelector('#temperatureDisplay'),
  search: document.querySelector('#searchInput'),
  tableBody: document.querySelector('#tableBody'),
  resultCount: document.querySelector('#resultCount'),
  comparison: document.querySelector('#comparisonChart'),
};

let database = [];

function formatDensity(record) {
  if (record.densityRange) {
    return `${record.densityRange.min}–${record.densityRange.max}`;
  }
  return record.density.toFixed(3);
}

function renderCategories() {
  const summaries = new Map();

  for (const record of database) {
    const summary = summaries.get(record.category) ?? {
      id: record.category,
      name: record.categoryLabel,
      slug: record.categorySlug,
      count: 0,
      minimum: Number.POSITIVE_INFINITY,
      maximum: Number.NEGATIVE_INFINITY,
    };
    summary.count += 1;
    summary.minimum = Math.min(summary.minimum, record.density);
    summary.maximum = Math.max(summary.maximum, record.density);
    summaries.set(record.category, summary);
  }

  const fragment = document.createDocumentFragment();
  for (const summary of [...summaries.values()].sort((a, b) => a.name.localeCompare(b.name))) {
    const link = document.createElement('a');
    link.className = 'category-card';
    link.href = `/${summary.slug}/`;

    const title = document.createElement('strong');
    title.textContent = summary.name;
    const count = document.createElement('span');
    count.textContent = `${summary.count} substances`;
    const range = document.createElement('small');
    range.textContent = `${summary.minimum.toFixed(3)}–${summary.maximum.toFixed(3)} kg/L`;

    link.append(title, count, range);
    fragment.appendChild(link);
  }
  elements.categories.replaceChildren(fragment);
}

function populateConverter() {
  const fragment = document.createDocumentFragment();
  for (const record of database) {
    const option = document.createElement('option');
    option.value = record.catalogKey;
    option.textContent = `${record.name} (${formatDensity(record)} kg/L)`;
    fragment.appendChild(option);
  }
  elements.substance.replaceChildren(fragment);

  const waterIndex = database.findIndex((record) => record.catalogKey === 'water-pure');
  elements.substance.selectedIndex = waterIndex >= 0 ? waterIndex : 0;
  updateConversion();
}

function selectedRecord() {
  return database.find((record) => record.catalogKey === elements.substance.value);
}

function updateConversion() {
  const record = selectedRecord();
  const mass = Number.parseFloat(elements.mass.value);
  if (!record || !Number.isFinite(mass) || mass <= 0) {
    elements.result.textContent = '0.000';
    return;
  }

  elements.result.textContent = (mass / record.density).toFixed(3);
  elements.density.textContent = `${formatDensity(record)} kg/L`;
  elements.temperature.textContent = `${record.temperature}°C`;
}

function appendCell(row, text, className = '') {
  const cell = document.createElement('td');
  cell.textContent = text;
  cell.className = className;
  row.appendChild(cell);
}

function renderDirectory() {
  const query = elements.search.value.toLowerCase().trim();
  const matches = database.filter((record) =>
    [record.name, record.categoryLabel, record.notes, record.source].some((value) =>
      value.toLowerCase().includes(query),
    ),
  );
  const visible = matches.slice(0, MAX_DIRECTORY_ROWS);
  const fragment = document.createDocumentFragment();

  for (const record of visible) {
    const row = document.createElement('tr');
    appendCell(row, record.name, 'substance-name');
    appendCell(row, formatDensity(record), 'density-value');
    appendCell(row, (1 / record.density).toFixed(3));
    appendCell(row, record.categoryLabel);
    appendCell(row, record.notes);

    const actionCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = `/${record.categorySlug}/`;
    link.textContent = 'Open category';
    link.className = 'table-action';
    actionCell.appendChild(link);
    row.appendChild(actionCell);
    fragment.appendChild(row);
  }

  elements.tableBody.replaceChildren(fragment);
  elements.resultCount.textContent = `Showing ${visible.length} of ${matches.length} matching substances (${database.length} total)`;
}

function renderComparison() {
  const records = comparisonKeys
    .map((key) => database.find((record) => record.catalogKey === key))
    .filter(Boolean);
  const volumes = records.map((record) => 1 / record.density);
  const maximum = Math.max(...volumes);
  const fragment = document.createDocumentFragment();

  records.forEach((record, index) => {
    const row = document.createElement('div');
    row.className = 'comparison-row';

    const label = document.createElement('span');
    label.textContent = record.name;
    const track = document.createElement('div');
    track.className = 'comparison-track';
    const bar = document.createElement('div');
    bar.className = 'comparison-bar';
    bar.style.width = `${Math.max((volumes[index] / maximum) * 100, 12)}%`;
    bar.textContent = `${volumes[index].toFixed(3)} L`;
    track.appendChild(bar);
    const density = document.createElement('span');
    density.className = 'comparison-density';
    density.textContent = `${record.density.toFixed(3)} kg/L`;

    row.append(label, track, density);
    fragment.appendChild(row);
  });
  elements.comparison.replaceChildren(fragment);
}

async function initialize() {
  try {
    database = await loadMasterDatabase();
    renderCategories();
    populateConverter();
    renderDirectory();
    renderComparison();
    elements.status.textContent = `${database.length} substance records loaded`;
    elements.status.classList.add('ready');
  } catch {
    elements.status.textContent = 'The substance database could not be loaded. Please refresh.';
    elements.status.classList.add('error');
  }
}

elements.mass.addEventListener('input', updateConversion);
elements.substance.addEventListener('change', updateConversion);
elements.search.addEventListener('input', renderDirectory);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));
}

void initialize();
