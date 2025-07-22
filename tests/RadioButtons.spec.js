import {test, expect} from '@playwright/test';

test('handle radiobuttons', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    await page.locator('#male').check();
    // await page.check("//input[@id='male']");
    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();


    await expect(await page.locator('#female').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})