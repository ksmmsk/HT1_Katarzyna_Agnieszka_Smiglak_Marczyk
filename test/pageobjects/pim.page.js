
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class PimPage extends Page {

    get btnAdmin () {
        return $('=Admin')
    }

    async openAdminPanel () {
        await this.btnAdmin.click();
    }

}




module.exports = new PimPage();
