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

    if (route.path === '/industrial') {
      const density = Number(await page.locator('#cat-substance-select').inputValue());
      await page.locator('#cat-mode-l-to-kg').click();
      await page.locator('#cat-mass-input').fill('2');
      await expect(page.locator('#cat-result-val')).toHaveText((2 * density).toFixed(3));
      await expect(page.locator('#cat-result-unit')).toHaveText('Kilograms');
      await expect(page.locator('#cat-formula')).toHaveText('m = V × ρ');
    }
  }
});
