
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class AdminPage extends Page {

    get menuJob () {
        return $('span=Job');
    }

    get menuJobTitles () {
        return $('=Job Titles');

    }

    async viewJobTitles () {
        await this.menuJob.click();
        await this.menuJobTitles.click();
    }


}




module.exports = new AdminPage();
