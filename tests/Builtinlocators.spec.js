//  built-in locators
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import { test, expect } from '@playwright/test';

test('built-in locators', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.getByTestId('open-registration-form-button').click();

  await page.getByRole('textbox', { name: 'First name' }).fill('Karthik');
  await page.getByRole('textbox', { name: 'Surname' }).fill('Lingadurai');

  await page.getByLabel('Day').selectOption('16');
  await page.getByLabel('Month').selectOption('10');
  await page.getByLabel('Year').selectOption('1995');

  await page.getByRole('radio', { name: 'Male', exact: true }).check();

  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('karthik@fb.com');
  await page.getByRole('textbox', { name: 'New password' }).fill('mypaassword');
  await page.getByRole('button', { name: 'Sign Up' }).click();

  await page.getByRole('link', { name: 'Already have an account?' }).click();

  await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('karthik@fb.com');
  await page.getByRole('textbox', { name: 'Password' }).click('mypaassword');
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Forgotten password?' }).click();

  await page.getByRole('button', { name: 'Cancel' }).click();
});