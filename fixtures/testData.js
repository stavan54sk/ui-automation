export const users = {
  validUser: {
    email: 'admin@company.com',
    password: 'Admin@123'
  }
};

export const leadData = {
  name: 'Playwright Test Lead',
  email: `lead_${Date.now()}@test.com`,
  priority: 'Medium',
  status: 'New',
  phone: '+1 (555) 123-4567',
  company: 'Acme Corporation',
  jobTitle: 'QA Engineer',
  dealValue: '50000',
  expectedClose: '',
  followUp: '',
  isQualified: false,
  emailOptIn: true,
  notes: 'Created by Playwright test'
};

export const baseURL = process.env.BASE_URL || 'https://v0-lead-manager-app.vercel.app/';

// Backwards-compatible defaults
export const credentials = {
  username: process.env.TEST_USER || users.validUser.email,
  password: process.env.TEST_PASS || users.validUser.password
};

export const legacyLead = {
  firstName: 'John',
  lastName: 'Doe',
  company: 'Acme'
};

export default {
  baseURL,
  users,
  leadData,
  credentials,
  legacyLead
};
