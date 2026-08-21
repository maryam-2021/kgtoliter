import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage calculator and density directory are interactive', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Kg to litre' })).toBeVisible();

  const mass = page.locator('#mass');
  await mass.fill('10');
  await expect(page.locator('#result')).toHaveText('10.000');

  await page.locator('#table-search').fill('diesel');
  await expect(page.locator('#table-status')).toContainText('matching substances');
  await expect(page.locator('#table-body tr')).not.toHaveCount(0);
});

test('homepage has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  const blocking = results.violations.filter(
    (violation) => violation.impact === 'critical' || violation.impact === 'serious',
  );
  expect(blocking).toEqual([]);
});
