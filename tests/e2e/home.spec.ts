import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Can navigate to home page', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000');
  });
});