import {test, expect} from '@playwright/test';

test("Videos", async ({ page }) => {
    
    await page.goto('https://www.netflix.com/in/login');

    await page.getByLabel('Email or mobile number').fill('7401607373');

    await page.getByLabel('Password').fill('mypassword');

    await page.locator('//button[@type="submit"]').click();

    await page.waitForTimeout(3000);

})