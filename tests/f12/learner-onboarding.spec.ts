import { test, expect } from '@playwright/test';

test('learner can begin onboarding and choose Afrikaans', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('./');
  await expect(page.getByRole('heading', { name: /Mzansi AI Educator/i })).toBeVisible();
  await page.getByRole('button', { name: 'Start Learning' }).click();
  await expect(page.getByRole('heading', { name: /Choose your learning language/i })).toBeVisible();
  await page.getByRole('radio', { name: /Afrikaans/i }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: /What is your goal/i })).toBeVisible();
  expect(errors).toEqual([]);
});
