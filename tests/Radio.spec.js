import {test, expect} from '@playwright/test';

test('handle radiobuttons', async ({ page }) => {

    await page.goto('https://www.easemytrip.com/');

    //Radio button
    await page.locator('#chkArmy').check();
    // await page.check("//input[@id='chkArmy']");

    await expect(page.locator('#chkArmy')).toBeChecked();
    expect(await page.locator('#chkArmy').isChecked()).toBeTruthy();


    expect(await page.locator('#chkStudent').isChecked()).toBeFalsy();
    expect(await page.locator('#chkSeniorCitizen').isChecked()).toBeFalsy();
    expect(await page.locator('#chkDoctors').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})