class LoginPage {
  get usernameInput() {
    return $('//input[@id="user-name"]');
  }
  get passwordInput() {
    return $('//input[@id="password"]');
  }
  get loginButton() {
    return $('//input[@id="login-button"]');
  }
  get errorMessage() {
    return $('//h3[@data-test="error"]');
  }

  async clearFields() {
    await this.usernameInput.clearValue();
    await this.passwordInput.clearValue();
  }
}
console.log(expect);
console.log(this.errorMessage);
module.exports = new LoginPage();
