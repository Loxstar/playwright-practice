import { test, expect } from '@playwright/test';
import {LoginPage} from '../models/loginPageModel';

test('verify login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    await expect(loginPage.logoutLink).toBeVisible();
});