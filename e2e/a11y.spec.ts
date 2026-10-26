import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home page has no a11y violations', async ({ page }) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('blog index has no a11y violations', async ({ page }) => {
  await page.goto('/blog');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
