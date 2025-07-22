// Assertions

// expect(): This is the assertion function used to perform checks.

// await expect(page).toHaveURL()       : Page has a URL
// await expect(page).toHaveTitle()     : Page has a title
// await expect(page).toBeVisible()     : Element is Visible
// await expect(page).toBeEnabled()     : Element is enabled
// await expect(page).toBeDisabled()    : Element is disabled
// await expect(page).toBeChecked()     : Checkbox is checked
// await expect(page).toHaveText()      : Element matches text
// await expect(page).toHaveValue()     : Input has value
// await expect(page).toContainText()   : Element contains text
// await expect(page).toHaveCount()     : Element length


// Types of Assertions:

// Hard Assertions:- 
// Immediately stops the test execution when the assertion fails. 
// It is strict and ensures no further steps are executed after a failure.

// Syntax: expect(locator).toHaveText(expectedText)


// Soft Assertions:- 
// Allows the test to continue executions even if the assertion fails. 
// The test collects all the failed assertions and reports them at the end, without interrupting the flow.

// Syntax: expect.soft(locator).toHaveText(expectedText)
