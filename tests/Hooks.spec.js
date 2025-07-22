//before all
//after all

//before each
//after each

import {test, expect} from '@playwright/test';

let page;

test.beforeAll('Demo Hooks', async({browser})=>{
    page = await browser.newPage();

    await page.goto('https://demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[text()="Log in"]').click();
});


test('Verify Product Count', async()=>{
    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9); 
});


test('Add Product to Cart', async()=>{
    await page.click('//a[text()="Samsung galaxy s6"]');
    await page.click('//a[text()="Add to cart"]');

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });
});


test('Verify Cart Page', async()=>{
    await page.click('#cartur');
});


test.afterAll('Logout', async()=>{
    await page.click('#logout2');
});
















































// test.beforeAll('Hooks', async({}) =>
// {
//     console.log("Login page");
// });


// test.afterAll('Hooks', async({}) =>
// {
//     console.log("Login page");
// });


// test('Search', async({page}) =>
// {
//     console.log("Search Page");
// });


// test('Add to cart', async({}) =>
// {
//     console.log("Add to cart Page");    
// });