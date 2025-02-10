const Page = require('./page');

class LoginPage extends Page {
    get usernameField() { return $('#user-name'); }
    get passwordField() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }
    get errorMessage() {
        return $('#login_button_container .error-message-container');
    }

    async fillCredentials(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async login(username, password) {
        await this.open();
        await this.fillCredentials(username, password);
        await this.clickLoginBtn();
    }

    async isErrorMessageDisplayed() {
        return await this.errorMessage.isDisplayed();    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
