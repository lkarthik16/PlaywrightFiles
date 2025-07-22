import {test, expect} from '@playwright/test';

test.skip('Ok Button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');

        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.getByText('Simple alert').click();
   
    await page.waitForTimeout(3000);

});




test.skip('Confirm', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm');
        
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept();
        await dialog.dismiss();

    })

    await page.locator("//button[@id='confirmBtn']").click();

    // expect(page.getByText('You pressed OK!')).toBeVisible();
   
    await page.waitForTimeout(3000);

});





test.only('Prompt', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('prompt');
        
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('Karthik');
        
        // await dialog.dismiss();

    })

    await page.locator("#promptBtn").click();

    // expect(page.locator('#demo')).toHaveText('Hello Karthik! How are you today?')
    // expect(page.locator('#demo')).toHaveText('User cancelled the prompt.')
   
    await page.waitForTimeout(5000);

});