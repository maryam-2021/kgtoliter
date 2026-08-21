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
