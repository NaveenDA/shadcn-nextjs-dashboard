import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly URL: string = '/';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        console.log(this.URL);
        await this.page.goto(this.URL);
    }
}