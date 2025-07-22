import{test, expect} from '@playwright/test';

test('Keyboard Actions', async({ page })=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill("Welcome to the Playwright Class");

    // await page.locator('[name="text1"]').fill('Welcome to Automation');

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V');

    
    await page.waitForTimeout(3000);
});

