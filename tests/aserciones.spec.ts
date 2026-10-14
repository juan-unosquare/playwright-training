import {test, expect} from '@playwright/test';

test.describe("Aserciones", () => {

    test("acciones y validacion de URL y texto en pantalla", async ({page}) => {
        //await page.goto("/");
        await page.goto("https://www.saucedemo.com");

        const campoUsuarioPorId = page.locator("#user-name");
        const botonLoginPorId = page.locator("#login-button");

        await expect(campoUsuarioPorId).toBeVisible();
        await expect(botonLoginPorId).toBeVisible();

        const campoPasswordPorClase = page.locator("input.form_input[type='password']");
        const botonLoginPorClase = page.locator("input.submit-button.btn_action");

        await expect(campoPasswordPorClase).toBeVisible();
        await expect(botonLoginPorClase).toBeVisible();

        const usuarioPrueba = "standard_user";
        const contraseniaDePrueba = "secret_sauce";

        await campoUsuarioPorId.fill(usuarioPrueba);
        await campoPasswordPorClase.fill(contraseniaDePrueba);
        await botonLoginPorId.click();

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(page.getByText("Products")).toBeVisible();
    });
});