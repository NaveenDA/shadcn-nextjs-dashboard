import { test, expect } from '@playwright/test';
import { SettingsPage } from '../pages/settings';

test.describe('Settings Page Tests', () => {
    let settingsPage: SettingsPage;

    test.beforeEach(async ({ page }) => {
        settingsPage = new SettingsPage(page);
        await settingsPage.goto();
    });


    test('Error message is displayed when email is empty when updating profile', async () => {
        await settingsPage.changeEmail('');
        await expect(settingsPage.emailErrorMessage).toBeVisible();
    });

    test('Error message is not visible when updating profile', async () => {
        await settingsPage.changeEmail('john.doe@gmail.com');
        await expect(settingsPage.emailErrorMessage).not.toBeVisible();
    });
});


