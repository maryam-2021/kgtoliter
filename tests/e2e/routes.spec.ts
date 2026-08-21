import { expect, test } from '@playwright/test';

const categoryRoutes = [
  { path: '/industrial', heading: /Industrial Chemicals & Solvents/, records: 17 },
  { path: '/petroleum', heading: /Petroleum Products & Hydrocarbons/, records: 20 },
  { path: '/solvents', heading: /Organic & Industrial Solvents/, records: 20 },
  { path: '/acids', heading: /Acids & Corrosive Solutions/, records: 20 },
  { path: '/food', heading: /Food & Groceries/, records: 47 },
];

test('deployment checklist routes load their populated category tools', async ({ page }) => {
  const homepageResponse = await page.goto('/');
  expect(homepageResponse?.ok()).toBe(true);
  await expect(page.getByRole('heading', { level: 1, name: 'Kg to litre' })).toBeVisible();
  await expect(page.locator('.subcat-card')).toHaveCount(34);

  for (const route of categoryRoutes) {
    const response = await page.goto(route.path);
    expect(response?.ok(), `${route.path} should return a successful response`).toBe(true);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(route.heading);
    await expect(page.locator('#cat-substance-select option')).toHaveCount(route.records);
    await expect(page.locator('#cat-result-val')).not.toBeEmpty();
  }
});
