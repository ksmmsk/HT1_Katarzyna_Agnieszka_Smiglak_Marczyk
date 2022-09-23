
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class PimPage extends Page {

    get btnAdmin () {
        return $$('.oxd-main-menu-item')[0];
    }

    async openAdminPanel () {
        await this.btnAdmin.click();
    }
}




module.exports = new PimPage();
