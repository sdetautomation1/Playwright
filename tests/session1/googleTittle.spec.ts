import { test, expect } from "@playwright/test";

   
  test("Google Tittle Test Case", async ({ page }) => {
    // Step 1: Navigate to Google
    await page.goto("https://www.google.com/");
        // Step 2: Verify the title 
        let fetchedTitle = await page.title();
        console.log("The title of the page is: " + fetchedTitle);
        expect(fetchedTitle).toBe("Google");

    });

    test("Navigatation TC", async ({ page }) => {
        // Step 1: Navigate to Google
        await page.goto("https://workspace.google.com/intl/en/products/drive/");
        // Step 2: Click on About link
        await page.goBack();
        await page.goForward(); 
        await page.reload();

    });