import { Page, Locator } from '@playwright/test';

export class UsersPage {
    readonly page: Page;
    readonly URL: string = 'dashboard/users'

    readonly addUserButton: Locator;
    readonly searchUsersTextbox: Locator;

    readonly usersTable: Locator;
    readonly usersTableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addUserButton = this.page.getByRole('button', { name: 'Add User' });
        this.searchUsersTextbox = this.page.getByPlaceholder('Search users...');
        this.usersTable = this.page.getByRole('table');
        this.usersTableRows = this.usersTable.locator('tbody tr');
    }

    async goto() {
        await this.page.goto(this.URL);
    }
}