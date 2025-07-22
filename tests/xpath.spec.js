import { test, expect } from '@playwright/test';

test ("locators", async ({page}) => {
    await page.goto("https://in.linkedin.com/");

    await page.locator("(//a[contains(text(), 'Sign in')])[1]").click();
    
    await page.fill('#username', "karthik@facebook.com");
    await page.fill('#password', "myFbpassword");
    
    await page.locator("[aria-label='Sign in']").click();
    
    await page.locator(text="Sign in").click();


    // await page.locator("[aria-label='Sign in']").click();

    await page.waitForTimeout(5000)
})