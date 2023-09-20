class LoginPage {
  /**
   * @param {import("playwright").Page} page
   */
  constructor(page) {
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorPopup = {
      errorText: page.getByTestId('error'),
    };
  }

  /**
   * @param {{ username: string; password: string; }} param0
   */
  async login({ username, password }) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = {
  LoginPage,
};
