import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Ejercicio Encontrar campo y boton via LoginPage', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.expectLoginFormVisible();

});