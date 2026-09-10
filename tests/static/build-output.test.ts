import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const outputRoot = path.resolve('dist');

async function htmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(target);
      return entry.name.endsWith('.html') ? [target] : [];
    }),
  );
  return nested.flat();
}

async function targetExists(pathname: string): Promise<boolean> {
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, '');
  const candidates = decoded
    ? [path.join(outputRoot, decoded), path.join(outputRoot, decoded, 'index.html')]
    : [path.join(outputRoot, 'index.html')];

  for (const candidate of candidates) {
    try {
      await stat(candidate);
      return true;
    } catch {
      // Try the next static-file representation.
    }
  }
  return false;
}

test('generated Astro pages contain no broken internal links', async () => {
  const broken: string[] = [];

  for (const file of await htmlFiles(outputRoot)) {
    const html = await readFile(file, 'utf8');
    const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);

    for (const href of new Set(links)) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const pathname = new URL(href, 'https://kgtoliter.com').pathname;
      if (!(await targetExists(pathname))) {
        broken.push(`${path.relative(outputRoot, file)} -> ${pathname}`);
      }
    }
  }

  assert.deepEqual(broken, []);
});

test('homepage contains essential document landmarks and metadata', async () => {
  const html = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
  assert.match(html, /<html[^>]+lang="en"/);
  assert.match(html, /<main[^>]+id="main-content"/);
  assert.match(html, /<h1\b/);
  assert.match(html, /<link rel="canonical" href="https:\/\/kgtoliter\.com\/"/);
  assert.match(html, /navigator\.serviceWorker\.register\(/);
});

test('key pages contain valid FAQPage, HowTo, and Dataset schema markup', async () => {
  const indexHtml = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
  const jsonLdMatches = [...indexHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.ok(jsonLdMatches.length > 0, 'Homepage must contain JSON-LD scripts');

  const schemas = jsonLdMatches.flatMap((m) => {
    try {
      const parsed = JSON.parse(m[1]);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  });

  const schemaTypes = schemas.map((s) => s['@type']);
  assert.ok(schemaTypes.includes('FAQPage'), 'Homepage must contain FAQPage schema');
  assert.ok(schemaTypes.includes('HowTo'), 'Homepage must contain HowTo schema');
  assert.ok(schemaTypes.includes('Dataset'), 'Homepage must contain Dataset schema');

  // Verify HowTo step structure on homepage
  const howTo = schemas.find((s) => s['@type'] === 'HowTo');
  assert.ok(Array.isArray(howTo.step) && howTo.step.length >= 3, 'HowTo must contain at least 3 steps');
  assert.equal(howTo.step[0]['@type'], 'HowToStep');

  // Verify Dataset structure on density reference
  const densityRefHtml = await readFile(path.join(outputRoot, 'density-reference', 'index.html'), 'utf8');
  assert.match(densityRefHtml, /"@type":"Dataset"/);
  assert.match(densityRefHtml, /"@type":"FAQPage"/);

  // Verify HowTo on dedicated conversion pages
  const waterPageHtml = await readFile(path.join(outputRoot, 'basic', 'kg-to-litres-water', 'index.html'), 'utf8');
  assert.match(waterPageHtml, /"@type":"HowTo"/);
  assert.match(waterPageHtml, /"@type":"FAQPage"/);

  // Verify HowTo on reverse guide
  const litreToKgHtml = await readFile(path.join(outputRoot, 'litre-to-kg', 'index.html'), 'utf8');
  assert.match(litreToKgHtml, /"@type":"HowTo"/);
  assert.match(litreToKgHtml, /"@type":"FAQPage"/);
  assert.match(litreToKgHtml, /"@type":"Dataset"/);
});

