import {test, expect} from '@playwright/test';
import users from './data/saucedemo-users.json';

type SauceDemoUser = {
    name: string;
    username: string;
    password: string;
    expectInventory: boolean;
};

const loginUrl = 'https://www.saucedemo.com/';
const testUsers = users as SauceDemoUser[];

for(const user of testUsers){
    test(`login SauceDemo - ${user.name}`, async({page}) => {
        await page.goto(loginUrl);
        await page.locator('#user-name').fill(user.username);
        await page.locator('#password').fill(user.password);
        await page.locator('#login-button').click();

        if(user.expectInventory) {
            await expect(page).toHaveURL(/inventory\.html/);
            await expect(page.locator('.title')).toHaveText('Products');
        }
    }); 
}