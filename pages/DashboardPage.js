class DashboardPage {
  constructor(page) {
    this.page = page;
    this.leadsNav = 'a[href="/leads"]';
  }

  async gotoLeads() {
    await this.page.click(this.leadsNav);
  }
}

module.exports = DashboardPage;
