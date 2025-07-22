import{test, expect} from '@playwright/test';

test('Test1', async({page})=>{
    await page.goto('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
});


test('Test2', async({page})=>{
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
});


test('Test3', async({page})=>{
    await page.goto('https://playwright.dev/docs/test-reporters#multiple-reporters');
    await expect(page).toHaveTitle('Reporters | Playwright');
});