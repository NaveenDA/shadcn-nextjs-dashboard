import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly URL: string = 'dashboard';

    readonly title: Locator;
    readonly cardsContainer: Locator
    readonly cards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.getByText('Dashboard');
        this.cardsContainer = this.page.locator('[class="grid gap-6 md:grid-cols-2 xl:grid-cols-4"]');
        this.cards = this.cardsContainer.locator('[class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-200"]');
    }

    async goto() {
        await this.page.goto(this.URL);
    }
}