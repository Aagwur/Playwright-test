const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import("playwright").Locator} root
   */
  constructor(page) {
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
  }
}

module.exports = {
  LoginPage,
};
