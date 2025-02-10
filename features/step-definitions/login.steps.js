const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pageobjects/login.page');
const pages = { login: LoginPage }

Given(/^User on the (\w+) page$/, async (page) => {
    if (!pages[page]) {
        throw new Error(`Page object for '${page}' not found`);
    }
    await pages[page].open();
});

When(/^User logins with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^User should see (.*)$/, async (result) => {
    if (result.includes('Username and password do not match any user')) {
        await expect(await LoginPage.isErrorMessageDisplayed()).toBe(true);
        await expect(await LoginPage.getErrorMessage(result));
        await expect(await LoginPage.isOnLoginPage()).toBe(true);
    } else if (result.startsWith('URL should be')) {
        await expect(await LoginPage.isOnInventoryPage()).toBe(true);
    }
});
