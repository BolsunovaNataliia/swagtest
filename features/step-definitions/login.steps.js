const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../pageobjects/login.page');
const pages = { login: loginPage }

Given(/^User on the (\w+) page$/, async (page) => {
    if (!pages[page]) {
        throw new Error(`Page object for '${page}' not found`);
    }
    await pages[page].open();
});

When(/^User logins with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password)
});

Then(/^User should see (.*)$/, async (result) => {
    if (result.includes('Username and password do not match any user')) {
        const errorMessage = await loginPage.getErrorMessage();
        const expectedMessage = result.replace(/['"]+/g, '');

        await expect(await loginPage.isErrorMessageDisplayed()).toBe(true);
        await expect(errorMessage).toContain(expectedMessage);
        await expect(await loginPage.isOnLoginPage()).toBe(true);
    } else if (result.startsWith('URL should be')) {
        await expect(await loginPage.isOnInventoryPage()).toBe(true);
    }
});
