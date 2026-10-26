import { expect, test } from '@chromatic-com/playwright';

test('home page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Cobollatin/i);
  await expect(page.getByRole('heading', { name: /Cobollatin/i })).toBeVisible();
});

test('about page available', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: /About Cobollatin/i })).toBeVisible();
});
