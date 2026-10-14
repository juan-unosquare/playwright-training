import {test, expect} from '@playwright/test';

test.describe("Reto semanal - Login exitoso", () =>{
    test("Automatizar login de principio a fin y validarel titulo de la pagina", async ({page,}) => {
        await page.goto("https://www.saucedemo.com");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page).toHaveTitle("Swag Labs");
        await expect(page.getByText("Products")).toBeVisible();

    });


});