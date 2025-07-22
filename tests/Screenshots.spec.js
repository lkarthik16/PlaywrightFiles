import {test, expect} from '@playwright/test';

test ("Screenshot", async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(4000);

    await page.screenshot({path:"tests/screenshots/" + Date.now() + "Mainpage.png", fullPage: true});

    await page.goto('https://www.flipkart.com/');

    await page.locator('a[data-testid="16"]').screenshot({path:"test/screenshots/" + Date.now() + "logo.png"});

})

