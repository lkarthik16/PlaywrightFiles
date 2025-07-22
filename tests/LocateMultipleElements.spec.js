// Locate Multiple Web Elements
// const elements = await page.$$(locator)


import { test, expect } from '@playwright/test';

test("Multiples", async ({ page }) => {
  // await page.goto('https://www.facebook.com/login/');
  await page.goto('https://www.facebook.com/r.php?entry_point=login');

  const link = await page.$$('ul');

  for (const links of link) {
    const test = await links.textContent();
    console.log(test);
  }
});


test("MultiplesCountry", async ({ page }) => {
  // await page.goto('https://www.facebook.com/login/');
  await page.goto('https://testautomationpractice.blogspot.com/');

  const link = await page.$$('#country option');

  for (const links of link) {
    const test = await links.textContent();
    console.log(test);
  }
});