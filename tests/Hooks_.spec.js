// Playwright Hooks

// beforeEach: The hook is executed before each individual test.
// afterEach: The hook is executed after each individual test.


//beforeAll: The hook is executed once before any of the tests start running.
// afterAll: The hook is executed once after all the tests have run.

import {test, expect} from '@playwright/test';

let page;

test.beforeAll('Home Page Test', async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.automationexercise.com/login');

    // login
    const loginForm = page.locator('form').filter({hasText: 'Login'});

    await loginForm.getByPlaceholder('Email Address').fill('karthik1695@yahoo.com');
    await loginForm.getByPlaceholder('Password').fill('Automation@1995')
    await loginForm.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByText('Logged in as')).toBeVisible();

    await page.waitForTimeout(3000);

});


test("Add product 01 to cart", async()=>{
    await page.locator("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[1]").click();
});

test("Add product 02 to cart", async()=>{
    await page.locator("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[5]").click();
});

test('Cart', async()=>{
    await page.locator('//a[normalize-space()="Cart"]').click();
});


test.afterAll('Logout', async()=>{
    await page.locator('//a[normalize-space()="Logout"]').click();

    await page.waitForTimeout(5000);
});