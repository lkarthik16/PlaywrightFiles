import {test, expect} from '@playwright/test';

test('Simple Alert', async({ page }) =>
{
    await page.goto('https://letcode.in/alert');

    page.on('dialog', async(dialog) => 
    {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Hey! Welcome to LetCode');
        await dialog.accept();
    })
    await page.locator('#accept').click();
    await page.waitForTimeout(3000);
});


test('Confirm Alert', async({ page }) =>
{
    await page.goto('https://letcode.in/alert');

    page.on('dialog', async(dialog) => 
    {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Are you happy with LetCode?');
        // await dialog.accept();
        await dialog.dismiss();
    })
    await page.locator('#confirm').click();
    await page.waitForTimeout(3000);
});

test('Prompt Alert', async({ page }) =>
{
    await page.goto('https://letcode.in/alert');

    page.on('dialog', async(dialog) => 
    {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Enter your name');
        await dialog.accept('Karthik');
        // await dialog.dismiss();
    })
    await page.locator('#prompt').click();
    await page.waitForTimeout(3000);
});