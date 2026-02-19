import { sanitizePhone } from '../utils/helpers.js';

export class LeadPage {
  constructor(page) {
    this.page = page;
    this.pageContainer = page.locator('[data-testid="page-leads"]');
    this.title = page.locator('[data-testid="leads-title"]');
    this.userEmail = page.locator('[data-testid="leads-user-email"]');
    this.logoutBtn = page.locator('[data-testid="leads-logout-btn"]');
    this.searchInput = page.locator('input[data-testid="leads-search-input"]');
    this.statusFilter = page.locator('[data-testid="leads-status-filter"]');
    this.createNewBtn = page.locator('[data-testid="leads-create-new-btn"]');
    this.table = page.locator('[data-testid="leads-table"]');
    this.leadEmailCells = page.locator('[data-testid^="lead-email-"]');
    // modal/form fields (use data-testid for create modal)
    this.modal = page.locator('[data-testid="modal-create-lead"]');
    this.nameInput = page.locator('input[data-testid="create-form-name-input"]');
    this.emailInput = page.locator('input[data-testid="create-form-email-input"]');
    this.phoneInput = page.locator('input[data-testid="create-form-phone-input"]');
    this.companyInput = page.locator('input[data-testid="create-form-company-input"]');
    this.jobTitleInput = page.locator('input[data-testid="create-form-job-title-input"]');
    this.dealValueInput = page.locator('input[data-testid="create-form-deal-value-input"]');
    this.expectedCloseInput = page.locator('input[data-testid="create-form-expected-close-input"]');
    this.followUpInput = page.locator('input[data-testid="create-form-follow-up-input"]');
    this.isQualifiedCheckbox = page.locator('[data-testid="create-form-is-qualified-checkbox"]');
    this.emailOptInCheckbox = page.locator('[data-testid="create-form-email-opt-in-checkbox"]');
    this.notesTextarea = page.locator('[data-testid="create-form-notes-textarea"]');
    this.priorityButton = page.locator('[data-testid="create-form-priority-select"]');
    this.statusButton = page.locator('[data-testid="create-form-status-select"]');
    this.submitBtn = page.locator('[data-testid="create-form-submit-btn"]');
    this.cancelBtn = page.locator('[data-testid="create-form-cancel-btn"]');
  }

  async createLead(lead) {
    await this.createNewBtn.click();
    await this.modal.waitFor({ state: 'visible' });
    await this.nameInput.fill(lead.name);
    await this.emailInput.fill(lead.email);
    if (lead.phone) {
      const cleaned = sanitizePhone(lead.phone);
      await this.phoneInput.fill(cleaned);
    }
    if (lead.company) await this.companyInput.fill(lead.company);
    if (lead.jobTitle) await this.jobTitleInput.fill(lead.jobTitle);
    if (lead.dealValue) await this.dealValueInput.fill(String(lead.dealValue));
    if (lead.expectedClose) await this.expectedCloseInput.fill(lead.expectedClose);
    if (lead.followUp) await this.followUpInput.fill(lead.followUp);
    if (lead.isQualified) await this.isQualifiedCheckbox.click();
    if (lead.emailOptIn) await this.emailOptInCheckbox.click();
    if (lead.notes) await this.notesTextarea.fill(lead.notes);

    // select priority via hidden select (adjacent to the button)
    if (lead.priority) {
      const prioritySelect = this.priorityButton.locator('+ select[aria-hidden="true"]');
      if (await prioritySelect.count()) {
        await prioritySelect.selectOption({ value: lead.priority });
      }
    }

    // select status via hidden select (adjacent to the button)
    if (lead.status) {
      const statusSelect = this.statusButton.locator('+ select[aria-hidden="true"]');
      if (await statusSelect.count()) {
        await statusSelect.selectOption({ value: lead.status });
      }
    }


    await this.submitBtn.click();
    await this.modal.waitFor({ state: 'hidden' });
  }


  async verifyLeadExists(email) {
    await this.page.waitForLoadState('networkidle');
    const emailLocator = this.page.locator('[data-testid^="lead-email-"]', { hasText: email });
    return await emailLocator.isVisible();
  }
}
