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

test('all six feature groups are integrated and interactive', async ({ page }) => {
  await page.goto('/');

  const featureNavigation = page.getByRole('navigation', {
    name: 'Interactive feature navigation',
  });
  await expect(featureNavigation.getByRole('link')).toHaveCount(6);

  await expect(page.locator('#substance option')).toHaveCount(772);
  await page.locator('#substance').selectOption({ label: 'Acetone (0.784 kg/L)' });
  await expect(page.locator('#converter-density')).toHaveText('0.784 kg/L');
  await expect(page.locator('#converter-temperature')).toHaveText('20°C');

  await expect(page.locator('.subcat-pill').first()).toContainText('772');
  await expect(page.locator('.subcat-card')).toHaveCount(34);

  const formulaMass = page.locator('#fp-mass-slider');
  await page.locator('#fp-density-slider').fill('1');
  await formulaMass.fill('10');
  await expect(page.locator('#fp-v')).toHaveText('10.00');

  const comparisonMass = page.locator('#mass-slider');
  await comparisonMass.fill('5');
  await expect(page.locator('#vol-label-water')).toHaveText('5.00 L');

  await expect(page.locator('.home-batch-row')).toHaveCount(2);
  await page.locator('.home-batch-row').first().locator('.batch-mass').fill('2');
  await expect(page.locator('#homeBatchTotalItems')).toHaveText('2');
  await expect(page.locator('#homeBatchTotalMass')).toHaveText('3.00 kg');

  await page.getByRole('button', { name: 'Ethanol Alcohol' }).click();
  await page.locator('#temp-range-slider').fill('50');
  await expect(page.locator('#chart-sub-label')).toHaveText('Substance: Ethanol Alcohol');
  await expect(page.locator('#slider-temp-readout')).toHaveText('50 °C');

  await page.locator('#table-search').fill('honey');
  await expect(page.locator('#table-status')).toContainText('772 total');
  await expect(page.locator('#table-body')).toContainText('Honey');

  const advancedTools = page.locator('#advanced-calculators');
  await expect(
    advancedTools.getByRole('link', { name: /View All \d+ Specialised Calculators/ }),
  ).toBeVisible();
});

test('homepage has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  const blocking = results.violations.filter(
    (violation) => violation.impact === 'critical' || violation.impact === 'serious',
  );
  expect(blocking).toEqual([]);
});
