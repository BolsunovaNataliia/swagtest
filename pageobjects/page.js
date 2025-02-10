module.exports = class Page {
    open () {
        return browser.url('https://www.saucedemo.com/')
    }

    async isOnLoginPage() {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('saucedemo.com/');
    }

    async isOnInventoryPage() {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('/inventory.html');
    }
}
