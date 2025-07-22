// XPath:
// Absolute XPath
// Relative XPath
// Dynamic XPath

// Relative XPath: 
// It starts with double forward slash (//)
// It will search the middle of the DOM Page

// Syntax:
// //tagName[@attributeName = 'attributeValue']
// //tagName[text()=''fullText]
// //tagName[contains(text(), 'half of the text')]
// //tagName[contains(@attributeName, 'attributeValue')]
// //tagName[@attributeName = 'attributeValue'][index]


// Absolute XPath:
// It starts with single forward slash (/) and it starts from html tag.
// Example: /html/body/div/div/div[6]/div[2]/div/table/tbody/tr/td/h1


// Dynamic XPath:
// Ansestors - Great Grand Parent
// Descendant - King => Minsiter => Soldiers
// Parent
// Child
// Preceding Sibling - Elder Brother
// Following Sibling - Younger Brother

// Syntax:
// //a[@role='button']/parent::tagName