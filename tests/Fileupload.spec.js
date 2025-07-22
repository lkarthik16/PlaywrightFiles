import {test, expect} from '@playwright/test';

test.skip('fileupload', async({ page }) => 
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForSelector('#singleFileInput'); //Ensures the file input field is ready before interacting with it. Helps avoid flaky tests caused by timing issues.

    // await page.locator('#singleFileInput').setInputFiles('tests/Fileupload/proj.png');
    await page.locator('#singleFileInput').setInputFiles('tests/Upload/Resume.pdf');

    await page.click('//button[text()="Upload Single File"]');
    // await page.getByRole('button', { name: 'submit' }).click();

    await page.waitForTimeout(5000);
});



test.skip('Multifileupload', async({ page }) => 
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForSelector('#multipleFilesInput');

    await page.locator('#multipleFilesInput').setInputFiles('tests/Upload/proj.png', 'tests/Fileupload/Resume.pdf');

    await page.click('//button[text()="Upload Multiple Files"]');
    // await page.getByRole('button', { name: 'submit' }).click();

    await page.waitForTimeout(5000);
});



test.skip('File uploader', async({ page }) =>
{
    await page.waitForSelector('#file-upload');
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator("#file-upload").setInputFiles('tests/Upload/proj.png');
    await page.locator("#file-submit").click();

    expect(page.locator('//h3')).toHaveText('File Uploaded!');
});



test('fileIO', async({ page }) => 
{
    await page.goto('https://www.file.io/');
    await page.locator("//label[@class='css-zpjtsm e12cce780']").click();
    // expect(page.locator('.mb-1.5').toHaveText('Your files are ready! File.io is now part of LimeWire.'));
});