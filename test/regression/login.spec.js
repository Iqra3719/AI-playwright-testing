import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://the-internet.herokuapp.com/login', { waitUntil: 'domcontentloaded' });
  
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.locator('button.radius').click();

  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});