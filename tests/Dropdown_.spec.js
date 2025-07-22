import { test, expect } from '@playwright/test';
import { log } from 'console';

test('Assertions', async ( { page }) => 
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption('Japan'); //visibleText
    await page.locator('#country').selectOption({index: 1}); //index
    await page.locator('#country').selectOption({value: 'uk'}); //value
    await page.locator('#country').selectOption({label: 'Canada'}); //label_value
    await page.selectOption('#country', 'Japan'); //by text





//     // Assertions
//     // 1a) Check no. of options in dropdown! - Approach 1
//     // const options = await page.locator('#country option');
//     // await expect(options).toHaveCount(10);


//     // 1b) check no. of options in dropdown - Approach 2
//     // const options = await page.$$('#country option');
//     // console.log("Number of options:", options.length);
//     // await expect(options.length).toBe(10);


//     //2a) check presence of value in the dropdown - Approach 1
//     // const content = await page.locator('#country').textContent();
//     // await expect(content.includes('India')).toBeTruthy();


//     //2b) check presence of value in the dropdown - Approach 2 - using loop
//     /*    const options = await page.$$('#country option');
//     let status = false;

//     for (const opt of options)
//     {
//         // console.log(await opt.textContent());
//         let value = await opt.textContent();
//         if(value.includes('France')) 
//         {
//             status = true;
//             break;
//         }
//     }

//     expect(status).toBeTruthy();
// */

//     // 3) select option from dropdown using loop
// /*
//     const options = await page.$$('#country option');

//     for (const opt of options)
//     {
//         let value = await opt.textContent();
//         if(value.includes('France')) 
//         {
//             await page.selectOption('#country', value);
//             break;
//         }
//     }
// */



//     await page.waitForTimeout(3000);

// });


// test.skip('Handle Multi Dropdowns', async({ page }) => 
// {
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     //select multiple options from multi select dropdown
//     // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

//     //Assertions
//     // 1) check no. of options in dropdown
//     // const options = await page.locator('#colors option');
//     // await expect(options).toHaveCount(7);


//     // 2) check no. of options in dropdown using JS Array
//     // const options = await page.$$('#colors option')
//     // console.log("No. of options:", options.length);
//     // await expect(options.length).toBe(7);
    

//     //3) check presence of value in the dropdown
//     // const content = await page.locator('#colors').textContent();
//     // await expect(content.includes('Yellow')).toBeTruthy();
//     // await expect(content.includes('Black')).toBeFalsy();


    await page.waitForTimeout(3000);

});


test

























test('verify dropdown', async({ page }) => 
{
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    

})