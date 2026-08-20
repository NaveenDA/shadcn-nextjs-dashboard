import { Page, Locator } from '@playwright/test';

export class SettingsPage {
    readonly page: Page;
    readonly URL: string = 'dashboard/settings';

    readonly usernameTextbox: Locator;
    readonly nameTextbox: Locator;
    readonly emailTextbox: Locator;
    readonly bioTextbox: Locator;
    readonly updateProfileButton: Locator;

    readonly emailErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page
        this.usernameTextbox = this.page.getByTitle('Username');
        this.nameTextbox = this.page.getByTitle('Name');
        this.emailTextbox = this.page.getByPlaceholder('john.doe@example.com');
        this.bioTextbox = this.page.getByTitle('Bio');
        this.updateProfileButton = this.page.getByRole('button', { name: 'Update profile' });
        this.emailErrorMessage = this.page.getByText('Please select an email to display.');
    }

    async goto() {
        await this.page.goto(this.URL);
    }

    async changeEmail(email: string) {
        await this.emailTextbox.fill(email);
        await this.updateProfileButton.click();
    }
}