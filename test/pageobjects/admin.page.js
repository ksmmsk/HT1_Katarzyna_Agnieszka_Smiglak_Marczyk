
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class AdminPage extends Page {

    get menuJob () {
        return $$('.oxd-topbar-body-nav-tab-item')[1];
    }

    get menuJobTitles () {
        return $$('.oxd-topbar-body-nav-tab-link')[0];

    }

    async viewJobTitles () {
        await this.menuJob.click();
        await this.menuJobTitles.click();
    }


}




module.exports = new AdminPage();
