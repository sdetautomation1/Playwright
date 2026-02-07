import test from "@playwright/test";


test("google autosuggest", async({page})=>
{
    await page.goto("https://www.google.com/");

    //await page.locator('//textarea[@name="q"]').fill("hello kitty");
    await page.locator('//textarea[@name="q"]').pressSequentially("hello kitty",{delay:100});

    //total no of autosuggest
   let allAutoSuggest =await page.locator('//div[@id="Alh6id"]//li').all();
   console.log(allAutoSuggest.length);


   //print the text of the autosuggest
   for(let i of allAutoSuggest)
   {
    console.log(await i.innerText()); //textContent() dumps everything including hidden elements, extra space ,css generated etc
   }
}

)

test("yahoo trending news", async({page})=>
{
    await page.goto("https://in.search.yahoo.com/?fr2=inr");
    let allNews=await page.locator('//div[@class="compList lh-l fz-s"]//li').all();
    console.log(allNews.length);

    for(let i of allNews)
    {
        let text= await i.textContent();
        if(text?.includes("Narendra"))
        {
            console.log(text);
            
        }

    }

});

test("rediff trending now", async({page})=>
{
    await page.goto("https://money.rediff.com/gainers");

    //all comapnies
    let allCompanies=await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all();

    //allrpices
    let allPrices= await page.locator('//table[@class="dataTable"]/tbody/tr/td[4]').all();

    for(let i=0;i<allCompanies.length;i++)
    {
        let text=await allCompanies[i].textContent();
        if(text==="TPI India")
        {
            console.log(await allPrices[i].textContent());
            break;
        }
    }
});

