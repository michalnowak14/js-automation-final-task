const loginPage = require("../pageobjects/loginPage");
const { expect } = require("chai"); // Using Chai for assertions

describe("Login Page Tests", () => {
  beforeEach(async () => {
    // Open the login page before each test
    await loginPage.open();
  });

  it("UC-1: Should display error for empty credentials", async () => {
    // Clear the inputs before clicking login
    await loginPage.usernameInput.setValue(""); // Clear the username
    await loginPage.passwordInput.setValue(""); // Clear the password

    // Click login
    await loginPage.loginButton.click();

    // Check error message for empty credentials
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.include("Username is required"); // Assert the error message
  });

  it("UC-2: Should display error when username is provided and password is empty", async () => {
    // Enter username and leave password empty
    await loginPage.usernameInput.setValue("standard_user");
    await loginPage.passwordInput.setValue(""); // Empty password

    // Click login
    await loginPage.loginButton.click();

    // Check error message for missing password
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.include("Password is required"); // Assert the error message
  });

  it("UC-3: Should login successfully with valid credentials", async () => {
    // Use accepted username and password 'secret_sauce'
    await loginPage.usernameInput.setValue("standard_user");
    await loginPage.passwordInput.setValue("secret_sauce");

    // Click login
    await loginPage.loginButton.click();

    // Validate that the page title is "Swag Labs"
    const pageTitle = await loginPage.getPageTitle();
    expect(pageTitle).to.equal("Swag Labs"); // Assert the page title
  });
});
