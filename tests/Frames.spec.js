import { test, expect } from "@playwright/test";

test('Frame', async({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allFrames = await page.frames();
    console.log(allFrames.length);
    
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    // const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]', 'Playwright');
    const frame3 = await page.frameLocator('//frame[@src="frame_3.html"]', 'Playwright');

    frame1.locator('//input[@name="mytext1"]').fill("Play");
    frame1.locator('//input[@name="mytext1"]', 'Playwright');
    frame.locator('//frame[@src="frame_1.html"]', 'Playwright');


    test('Frame1Test', async({ page }) =>
    {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame1Test = await page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]');
    await frame1Test.fill("Playwright")
    await page.waitForTimeout(4000);

    })


})


test('Iframe', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const parent = await page.frame({url:'https://ui.vision/demo/webtest/frames/'})
    await parent.fill('[name="mytext3]', "Git")

    const child = await parent.childframes()
    await child[0].locator("//div[@id='i9']//div[@class='rseUEf nQOrEb']").click()
    await child[0].locator("//div[@id='i21']//div[@class='rq8Mwb']").check()

    await page.waitforTimeout(4000);


    // await child.parent();
    // await parent.locator('')



})
