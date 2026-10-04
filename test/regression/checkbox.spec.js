import { test, expect } from '@playwright/test';
test('checkbox test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://the-internet.herokuapp.com/checkboxes', { waitUntil: 'domcontentloaded' });
  const checkbox1 = page.locator('#checkboxes input').first();
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});