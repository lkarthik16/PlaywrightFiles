import { test, expect } from '@playwright/test';

test ('Assertions', async ( { page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption('Japan');

    // const testImage = page.locator('//img[@class="wikipedia-icon"]'); 
    // await expect(testImage).toBeAttached();
    await expect(page.locator('.wikipedia-icon')).toBeAttached();

    const testCheck = page.locator('#tuesday');
    await testCheck.click();
    await expect(testCheck).toBeChecked();
    // await expect(await page.locator('#tuesday').click()).toBeChecked();

    const testEdit = page.locator('#Wikipedia1_wikipedia-search-input');
    await expect(testEdit).toBeEditable();

    const testEmpty = page.locator('#phone');
    await expect(testEmpty).toBeEmpty();

    const testEnable = page.locator('#male');
    await testEnable.click();
    await expect(testEnable).toBeEnabled();

    const testHaveId = page.locator('#email');
    await expect(testHaveId).toHaveId('email');

    await expect(page.getByText('PlaywrightPractice')).toBeVisible();

    const testContainText = page.locator('//a[contains(text(),"Online")]');
    await expect(testContainText).toContainText('Online');

    await expect(page).toHaveTitle('Automation Testing Practice');

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    // const testCount = page.locator('list > .component');
    // await expect(testCount).toHaveCount(3);

    // const testHaveValue = page.locator('input[type=number]');
    // await testHaveValue.fill('9876543210');
    // await expect(testHaveValue).toHaveValue(/[0-9]/);

    // const testDisable = page.locator('');
    // await expect(testDisable).toBeDisabled();

    // const testFocus = page.getByRole('');
    // await expect(testFocus).toBeFocused();

    // const testHidden = page.locator('');
    // await expect(testHidden).toBeHidden();

    // const locator = page.getByRole('');
    // await expect(locator).toBeInViewport();
    
    // const testContainClass = page.locator('');
    // await expect(testContainClass).toContainClass('');

    // const testDesc = page.getByTestId('');
    // await expect(testDesc).toHaveAccessibleDescription('');

    // const testAccessName = page.getByTestId('');
    // await expect(testAccessName).toHaveAccessibleName('');

    // const testHaveAttr = page.locator('');
    // await expect(testHaveAttr).toHaveAttribute('');

    // const testHaveClass = page.locator('');
    // await expect(testHaveClass).toHaveClass('');

    // const testHaveCSS = page.getByRole('');
    // await expect(testHaveCSS).toHaveCSS('');

    // const testJSPro = page.locator('.component');
    // await expect(testJSPro).toHaveJSProperty('loaded', true);

    // const testHaveRole = page.getByTestId('save-button');
    // await expect(testHaveRole).toHaveRole('button');

    // const testHaveScreenshot = page.getByRole('button');
    // await expect(testHaveScreenshot).toHaveScreenshot('image.png');

    // const testText = page.locator('a');
    // await expect(testText).toHaveText('Online Trainings');

    // const testHaveValues = page.locator('id=favorite-colors');
    // await locator.selectOption(['R', 'G']);
    // await expect(testHaveValues).toHaveValues([/R/, /G/]);

    // await page.goto('https://demo.playwright.dev/todomvc/');
    // await expect(page.locator('body')).toMatchAriaSnapshot(`- heading "todos" - textbox "What needs to be done?"`);

    // await expect(page).toHaveScreenshot('');

});

































// import { test, expect } from '@playwright/test';

// test ('Amazon homepage elements', async ({ page }) => {
//     await page.goto('https://www.amazon.in/');

//     // Verify logo is visible and attached to DOM
//     // await expect(page.getByAltText('Refrigerators')).toBeVisible();
//     // await expect(page.getByAltText('ACs')).toBeAttached();

//     // await expect(page.getByPlaceholder('Search Amazon.in')).toBeEditable();

//     await expect(page.getByRole('link', { name : 'Sign in' })).toBeEnabled();

//     await page.waitForTimeout(4000)

// })
