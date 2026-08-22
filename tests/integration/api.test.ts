import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import type { Server } from 'node:http';
import { startServer } from '../../server';

let server: Server;
let baseUrl: string;

before(async () => {
  server = startServer(0);
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert.ok(address && typeof address === 'object');
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
});

test('API returns catalog metadata and conversions', async () => {
  const categories = await fetch(`${baseUrl}/api/categories`).then((response) => response.json());
  assert.ok(categories.totalSubstances > 700);
  assert.ok(categories.totalCategories > 20);

  const conversion = await fetch(`${baseUrl}/api/convert/diesel/10`).then((response) =>
    response.json(),
  );
  assert.ok(Math.abs(conversion.volumeLiters - 12.0192307692) < 1e-9);
});

test('GET /api/convert with query parameters returns structured conversion', async () => {
  const res = await fetch(`${baseUrl}/api/convert?mass=10&from=kg&to=liter&substance=diesel`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.mass_kg, 10);
  assert.equal(data.substance, 'diesel-2');
  assert.equal(data.density_kg_per_l, 0.832);
  assert.equal(data.volume_l, 12.0192);
  assert.equal(data.formula, 'V = m / density');

  // Test reverse conversion from volume to mass
  const reverseRes = await fetch(`${baseUrl}/api/convert?volume=12.0192&from=liter&to=kg&substance=diesel`);
  assert.equal(reverseRes.status, 200);
  const revData = await reverseRes.json();
  assert.equal(revData.volume_l, 12.0192);
  assert.equal(revData.mass_kg, 10);
  assert.equal(revData.formula, 'm = V * density');
});

test('construction calculators remain available without a duplicate density database', async () => {
  const response = await fetch(`${baseUrl}/api/calculate/beam?beamLength=6&loadMagnitude=20`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.type, 'beam');
  assert.ok(Number(body.result.maxMoment) > 0);
  assert.ok(Number(body.result.maxDeflection_mm) > 0);
});

test('submission endpoint does not expose stored personal information', async () => {
  const response = await fetch(`${baseUrl}/api/submissions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      name: 'Test liquid',
      density: 1.1,
      category: 'test',
      email: 'private@example.com',
    }),
  });
  const body = await response.json();

  assert.equal(response.status, 202);
  assert.equal(JSON.stringify(body).includes('private@example.com'), false);
  assert.equal((await fetch(`${baseUrl}/api/submissions`)).status, 404);
});
