import { expect, type Locator, type Page } from '@playwright/test';
require('dotenv');


export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly emailTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly loginButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.emailTextbox = page.getByRole('textbox').nth(0);
    this.passwordTextbox = page.getByRole('textbox').nth(1)
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.logoutLink = page.getByRole('link', { name: 'Logout' })
  }
  async login() {
    await this.page.goto(process.env.TEST);
    await this.loginLink.click();
    await this.emailTextbox.fill('loxxstar@hotmail.com');
    await this.passwordTextbox.fill(process.env.PASSWORD);
    await this.loginButton.click();
  }
}
