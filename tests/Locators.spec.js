import { test, expect } from '@playwright/test';

test('locators', async ({ page }) => {
    await page.goto("https://www.facebook.com/");

    await page.locator('#email').fill('karthik@facebook.com');
    
    await page.locator('#pass').fill('password@123');

    await page.locator('._6ltj').click()

    await page.waitForTimeout(5000);
})
