import { test, expect } from '@playwright/test';
import orange from "./JSON/orange.json"

test('DataDriven', async ({ page }) => {

    // await page.viewportSize({width:360,height:640})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.viewportSize({width:360,height:640})

    await page.fill("//input[@placeholder='Username']",orange.Username)
    await page.fill("//input[@placeholder='Password']",orange.Password)



});