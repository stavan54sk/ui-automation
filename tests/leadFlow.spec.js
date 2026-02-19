import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { LeadPage } from '../pages/LeadPage.js';
import { users, leadData } from '../fixtures/testData.js';

test.describe('Lead Management Flow', () => {

  test('Login → Create Lead → List Lead', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const leadPage = new LeadPage(page);

    // Step 1: Login
    await loginPage.navigate();
    await loginPage.login(users.validUser.email, users.validUser.password);

    // Step 2: Create Lead (use a unique email per run)
    const uniqueLead = { ...leadData, email: `lead_${Date.now()}@test.com` };
    await leadPage.createLead(uniqueLead);

    // Step 3: Verify Lead appears in list
    const isVisible = await leadPage.verifyLeadExists(uniqueLead.email);
    expect(isVisible).toBeTruthy();
  });

});
