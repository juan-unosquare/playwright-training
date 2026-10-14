import {test, expect} from '@playwright/test';

test.describe("Localizadores y navegación - asignacion", () => {

    test("Encontrar campo de texto y boton por id y clase", async ({page}) => {
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

    });
});