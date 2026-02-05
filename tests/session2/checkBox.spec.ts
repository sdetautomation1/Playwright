import test from "@playwright/test";

test("daling with checkbox",async({page})=>{

   await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");

   //await page.waitForTimeout(2000);

   //click on the checkbox
   await page.locator('(//div[@class="display"])[1]/input[1]').click();

   //check if its selected or not
   let result=await page.locator('(//div[@class="display"])[1]/input[1]').isChecked();
   console.log(result);

   //fetch the text of the checkbox(soccer)
   let textOFCheckBox=await page.locator('(//div[@class="display"])[1]/input[1]').getAttribute("value");
   console.log(textOFCheckBox);


});

test("dropdown ", async({page})=>{
await page.goto("https://www.wikipedia.org/");

//select the option from the drop down
await page.locator('//select[@id="searchLanguage"]').selectOption("Afrikaans");//visible text

await page.waitForTimeout(2000);

await page.locator('//select[@id="searchLanguage"]').selectOption({index:2}); //index

await page.waitForTimeout(2000);

await page.locator('//select[@id="searchLanguage"]').selectOption("ast"); //value attribute

});


test("dropdown multiselect", async({page})=>{
await page.goto("https://www.wikipedia.org/");

//using visible text
await page.locator('//select[@id="searchLanguage"]').selectOption(["Afrikaans","العربية"]);

//using index
await page.locator('//select[@id="searchLanguage"]').selectOption([{index:2},{index:4}]);

//using value attribute
await page.locator('//select[@id="searchLanguage"]').selectOption(["ast","bg"]);
});

test("mix & match", async({page})=>{
await page.goto("https://www.wikipedia.org/");

//using visible text
await page.locator('//select[@id="searchLanguage"]').selectOption([
    "ar",
    "English"
]);

});



test("total language inside wikipedia", async({page})=>{
await page.goto("https://www.wikipedia.org/");

const totalElement=await page.locator('//select[@id="searchLanguage"]/option').all();
console.log(totalElement.length);

});

test("print the text of all supported languages", async({page})=>{
await page.goto("https://www.wikipedia.org/");

let totalElements=await page.locator('//select[@id="searchLanguage"]/option').all();

for(let i of totalElements)
{
    console.log(await i.textContent());
}


});
