import { test, expect } from '@playwright/test';

test('Assertions', async ( { page }) => 
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption('Japan'); //visibleText
    await page.locator('#country').selectOption({index: 3}); //index
    await page.locator('#country').selectOption({value: 'uk'}); //value
    await page.locator('#country').selectOption({label: 'Canada'}); //value
});  

test.only('Assertionsss', async({ page }) => 
{
  await page.goto('https://testautomationpractice.blogspot.com/');

  //approach 1
  const multiple = await page.$$('#country')
  await expect(multiple).toHaveCount(10);
  await page.waitForTimeout(3000);


  //approach 2
  const multiples = await page.locator('#country').textContent();
  await expect(content.includes('india')).toBeFalsy();
  await page.waitForTimeout(3000);


  //approach 3
  const content = await page.locator('#country').textContent();
  await expect(content.includes('India')).toBeTruthy();
  await page.waitForTimeout(3000);

  
  //approach 4
  const options = await page.$$('#country option');
  //let a = false;
  for (const result of options) {
    console.log(await result.textContent());
  }  
});




































test("MultiplesCountry", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const link = await page.$$('#country option');
  for (const links of link) {
    const test = await links.textContent();
    console.log(test);
  }
});



test('facebook dropdown', async({ page }) => 
{
  await page.goto('https://facebook.com/r.php?entry_point=login');

  await page.locator('#day').selectOption('16');
  await page.locator('#month').selectOption({value: '10'});
  await page.locator('#year').selectOption({label: '2025'});
});




