import {test, expect} from '@playwright/test';

test('Mouse', async({page})=>{

    await page.goto('https://www.amazon.in/');

    let home = await page.locator('//span[@class="nav-line-2 "]');
    await home.hover();
    await expect(home).toBeEnabled();
    await page.waitForTimeout(3000);
});


// test('Mouse right click', async (params) => {

//     await page.goto('https://www.amazon.com/');

//     let home2 = await page.locator('//a[text="Click here"]');


// })