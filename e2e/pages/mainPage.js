class MainPage {
  /**
     * @param {import("playwright").Page} page
     */
  constructor(page) {
    this.logoText = page.locator('.app_logo');
  }
}

module.exports = {
  MainPage,
};
