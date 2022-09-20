
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

    get btnAdd () {
        return $('button=Add');
    }

    get inputJobTitle () {
        return $('input[class="oxd-input"]');
    }

    get inputJobDescription () {
        return $('//textarea');
    }

    get inputJobNote () {
        return $('//textarea[1]')
    }

    get saveBtn () {
        return $('button[type="submit"]');
    }

    async viewJobTitles () {
        await this.menuJob.click();
        await this.menuJobTitles.click();
    }

    async addJobTitle () {
        await this.btnAdd.click();
    }

    

}




module.exports = new AdminPage();
