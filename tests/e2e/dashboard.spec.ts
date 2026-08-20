import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';
import { ProjectsPage } from '../pages/projects';

test.describe('Dashboard Page Tests', () => {
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        dashboardPage = new DashboardPage(page);
        await dashboardPage.goto();
    });

    test('Can navigate to Projects page from Dashboard page by clicking on tab in the left panel', async ({ page }) => {
        const projectsPage: ProjectsPage = new ProjectsPage(page);
        await page.getByRole('link', { name: 'Projects' }).click();
        await expect(page).toHaveURL(projectsPage.URL);
    })
});