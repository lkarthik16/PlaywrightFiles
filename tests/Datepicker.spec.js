import {test, expect} from '@playwright/test';

test('Date picker', async({ page })=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.fill('#datepicker', "16/10/1995");

    await page.waitForTimeout(3000);
})