import {test, expect} from '@playwright/test';

test('handle checkbox', async({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//single checkbox
// await page.locator('#sunday').check();
// await expect(await page.locator('#sunday')).toBeChecked();
// await expect(await page.locator('#sunday')).isChecked().toBeTruthy();

// await page.waitForTimeout(3000);

// await page.locator('#monday').check();
// await expect(await page.locator('#monday')).toBeChecked();
// await expect(await page.locator('#monday')).isChecked().toBeFalsy();

// await page.waitForTimeout(3000);


//Multiple checkboxes
const checkboxlocator = ['#sunday', '#tuesday', '#friday', '#saturday'];

for (const checkb of checkboxlocator) //select multiple checkboxes
{
    await page.locator(checkb).check();
}



for (const checkb of checkboxlocator) //unselect multiple checkboxes which are already selected
{
    if(await page.locator(checkb).isChecked()) //if condn true, uncheck
    {
    await page.locator(checkb).uncheck();
    }
}


})