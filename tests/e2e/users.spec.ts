import { test, expect } from '@playwright/test';
import { UsersPage } from '../pages/users';

test.describe('Home Page Tests', () => {
    let usersPage: UsersPage;

    test.beforeEach(async ({ page }) => {
        usersPage = new UsersPage(page);
        await usersPage.goto();
    });

    test('Core UI elements are present', async () => {
        await expect(usersPage.searchUsersTextbox).toBeVisible();
        await expect(usersPage.addUserButton).toBeVisible();
    });

    test('Users table is not empty', async () => {
        await expect(usersPage.usersTableRows).not.toHaveCount(0);
    });
});