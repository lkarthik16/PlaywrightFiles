// Frame objects
// const frame = page.frame('frame-login'); // Get frame using the frame's name attribute

// const frame = page.frame({ url: /.*domain.*/ }); // Get frame using frame's URL

// await frame.fill('#username-input', 'John'); // Interact with the frame

// Locate element inside frame
// const username = await page.frameLocator('.frame-class').getByLabel('User Name');
// await username.fill('John');


// Frames
import { test, expect } from "@playwright/test";

test('frames', async({page}) => 
{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //totalFrames
    const allframes = await page.frames();
    console.log("Number of frames:", allframes.length);
        

    // approach 1: handle element Using name or url
    // const frame01 = await page.frame('name'); //if name is present

    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill('//input[@name="mytext1"]', 'Hello');

    await page.waitForTimeout(3000);


    //approach 2: using frame locator
    const inputBox1 = await page.frameLocator("//frame[@src='frame_1.html']").locator('//input[@name="mytext1"]');
    inputBox1.fill('Hello, Karthik');

    await page.waitForTimeout(3000);

});


//Nested frames
test.only('Nested frames', async({ page }) => 
{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // using the frame's name attribute
    // const frame3 = await page.frame('mytext3'); //Not working
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});

    // await frame3.fill('Welcome');
    frame3.locator('//input[@name="mytext3"]').fill('Welcome');


    //nested frame
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator('//div[@id="i6"]//div[@class="AB7Lab Id5V1"]').click();
    await childFrames[0].locator('//div[@id="i6"]//div[@class="AB7Lab Id5V1"]').uncheck();
    await childFrames[0].locator('//div[@id="i9"]//div[@class="AB7Lab Id5V1"]').click();

    await childFrames[0].locator('//div[@id="i21"]//div[@class="uHMk6b fsHoPb"]').check();

    await page.waitForTimeout(3000);

});