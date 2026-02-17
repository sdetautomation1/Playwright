import test from "@playwright/test";

test("handling shadodom element", async({page})=>
{
    await page.goto("https://shop.polymer-project.org/");

    //xpath cannto pierce shadow dom: hence we need to use css here
    await page.locator('a[href="/list/mens_outerwear"]').nth(1).click();
}

)

test("alert or dialoge handling", async({page})=>
{   
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    page.on('dialog', async dialog=>{
        await page.waitForTimeout(2000);
        console.log(dialog.message());
        dialog.accept();
    }  )

    //click on the login 
    await page.locator('//button[@name="proceed"]').click();

})


test("couting iframe", async({page})=>
{ 
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit");
    console.log(page.frames().length); //shows only 3 iframes

})

test("working with iframe", async({page})=>
{ 
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit");
    
     //await page.locator('//input[@id="fname"]').fill("milan");

     await page.frameLocator('//iframe[@id="iframeResult"]').locator('//input[@id="fname"]').fill("milan")
     
})

test("working with Nested iframe", async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.frameLocator('//frame[@src="frame_3.html"]').frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').locator('//span[text()="Hi, I am the UI.Vision IDE"]').click();
});


test("Nested iframe + multiple child frames", async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.frameLocator('//frame[@src="frame_3.html"]').frameLocator('//iframe').nth(0).locator('//span[text()="Hi, I am the UI.Vision IDE"]').click();
});

