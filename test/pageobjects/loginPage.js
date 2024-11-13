// test/pageobjects/loginPage.js

class LoginPage {
  // Define selectors using XPath
  get usernameInput() {
    return $('//input[@data-test="username"]');
  }
  get passwordInput() {
    return $('//input[@data-test="password"]');
  }
  get loginButton() {
    return $('//input[@data-test="login-button"]'); // Using XPath based on the 'data-test' attribute
  }

  get errorMessage() {
    return $('h3[data-test="error"]');
  }
  get pageTitle() {
    return $('//div[@class="app_logo"]');
  }

  // Actions that interact with the login page
  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.getText();
  }

  async getPageTitle() {
    return await this.pageTitle.getText();
  }
}

module.exports = new LoginPage();
