export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[data-testid="login-email-input"]');
    this.passwordInput = page.locator('input[data-testid="login-password-input"]');
    this.loginButton = page.locator('button[data-testid="login-submit-btn"]');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
