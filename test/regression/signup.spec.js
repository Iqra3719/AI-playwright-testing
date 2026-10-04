import { test, expect } from '@playwright/test';
test('signup page load test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});