# UI Automation Playwright

## Setup Instructions

1. **Install Node.js** (v18+ recommended)
2. Clone this repository and navigate to the project folder:
   ```bash
   git clone <your-repo-url>
   cd ui-automation-playwright
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## How to Execute Automated Tests

- **Run all tests (headless):**
  ```bash
  npx playwright test
  ```
- **Run all tests with browser UI:**
  ```bash
  npx playwright test --headed
  ```
- **Run a specific test file:**
  ```bash
  npx playwright test tests/leadFlow.spec.js
  ```
- **Show HTML report:**
  ```bash
  npx playwright show-report
  ```

## Tools and Frameworks Used

- [Playwright](https://playwright.dev/) — End-to-end browser automation
- [Node.js](https://nodejs.org/) — JavaScript runtime
- [npm](https://www.npmjs.com/) — Package manager

### Project Structure

- `tests/` — Test specs
- `pages/` — Page Object Models
- `fixtures/` — Test data
- `utils/` — Helpers/utilities
- `playwright.config.js` — Playwright configuration

---
For more details, see comments in the test and page object files.
