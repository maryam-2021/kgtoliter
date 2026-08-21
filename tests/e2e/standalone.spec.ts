import { expect, test } from '@playwright/test';

test('standalone toolkit loads the canonical database and integrates every section', async ({
  page,
}) => {
  await page.goto('/standalone/');

  await expect(page.locator('#appStatus')).toHaveText('772 substance records loaded');
  await expect(page.locator('#categoriesGrid .category-card')).toHaveCount(34);
  await expect(page.locator('#substanceSelect option')).toHaveCount(772);

  await page.locator('#massInput').fill('2');
  await page.locator('#substanceSelect').selectOption({ label: 'Acetone (0.784 kg/L)' });
  await expect(page.locator('#resultValue')).toHaveText('2.551');
  await expect(page.locator('#densityDisplay')).toHaveText('0.784 kg/L');

  await page.locator('#searchInput').fill('honey');
  await expect(page.locator('#resultCount')).toContainText('772 total');
  await expect(page.locator('#tableBody')).toContainText('Honey');

  await expect(page.locator('#comparisonChart .comparison-row')).not.toHaveCount(0);
});
