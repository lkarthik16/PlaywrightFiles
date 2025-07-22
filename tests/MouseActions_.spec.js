import {test, expect} from '@playwright/test';

test('Mouse Hover', async({page})=>{
    await page.goto('https://www.automationexercise.com/');

    //Mouse Hover
    await page.locator("(//div[@class='single-products'])[1]").hover();
    
    await page.waitForTimeout(3000);
});


test.only('Mouse Right Click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = await page.locator('//span[@class="context-menu-one btn btn-neutral"]');

    //right click button
    await button.click({button: 'right'});

    await page.waitForTimeout(3000);
});



test('Mouse Double Click', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnDC = await page.locator('//button[normalize-space()="Copy Text"]');

    //double click
    await btnDC.dblclick();

    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');
    
    await page.waitForTimeout(3000);
});



test('Drag and Drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Drag 
    const dragg = await page.locator('//div[@id="draggable"]');
    //Drop
    const dropp = await page.locator('//div[@id="droppable"]');    
    
    //Approach 1
    /*
    await dragg.hover();
    await page.mouse.down()

    await dropp.hover();
    await page.mouse.up();
    */

    //Approach 2
    await dragg.dragTo(dropp);

    


    await page.waitForTimeout(3000);
});