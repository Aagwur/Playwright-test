const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { MainPage } = require('../pages/mainPage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Login flow verification', () => {
  test('Login with correct username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.login({
      username: 'standard_user',
      password: 'secret_sauce',
    });

    await expect(mainPage.logoText).toHaveText('Swag labs');
  });

  test('Login with correct username and incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login({
      username: 'standard_user',
      password: '12345678',
    });

    await expect(loginPage.errorPopup.errorText).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });
});
