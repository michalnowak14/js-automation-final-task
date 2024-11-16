const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../features/pageobjects/LoginPage");
const { expect } = require("chai");

Given("I am on the Sauce Demo login page", async () => {
  await browser.url("https://www.saucedemo.com/");
});

When("I enter a username and password", async () => {
  await LoginPage.usernameInput.setValue("test_user");
  await LoginPage.passwordInput.setValue("test_password");
});

When("I clear both the username and password fields", async () => {
  await LoginPage.clearFields();
});

When("I click the Login button", async () => {
  await LoginPage.loginButton.click();
});

Then("I should see an error message saying {string}", async (errorMessage) => {
  const actualErrorMessage = await LoginPage.errorMessage.getText();
  expect(actualErrorMessage).to.include(errorMessage);
});

When("I enter a username", async () => {
  await LoginPage.usernameInput.setValue("test_user");
});

When("I leave the password field empty", async () => {
  await LoginPage.passwordInput.clearValue();
});

When("I enter a valid username", async () => {
  await LoginPage.usernameInput.setValue("standard_user");
});

When("I enter a valid password", async () => {
  await LoginPage.passwordInput.setValue("secret_sauce");
});

Then("I should see the dashboard with the title {string}", async (title) => {
  const actualTitle = await browser.getTitle();
  expect(actualTitle).to.equal(title);
});
