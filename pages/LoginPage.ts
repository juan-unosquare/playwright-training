import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButtonById: Locator;
    readonly loginButtonByClass: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButtonById = page.locator('#login-button');
        this.loginButtonByClass = page.locator('input.btn_action');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async expectLoginFormVisible(){
        await expect(this.usernameField).toBeVisible();
        await expect(this.loginButtonByClass).toBeVisible();
    }

    async login(username: string, password: string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButtonById.click();
    }
}