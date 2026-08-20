import { Page, Locator } from '@playwright/test';

export class ProjectsPage {
    readonly page: Page;
    readonly URL: string = 'dashboard/projects';

    readonly title: Locator;
    readonly newProjectButton: Locator;

    readonly projectCardsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.getByText('Projects');

        this.newProjectButton = this.page.getByRole('button', { name: 'New Project' });
        this.projectCardsGrid = this.page.locator('class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"')
    }

    async goto() {
        await this.page.goto(this.URL);
    }
}