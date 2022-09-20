
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class JobPage extends Page {

    get btnAdd () {
        return $('button=Add');
    }

    get inputJobTitle () {
        return $('input.oxd-input.oxd-input--active')
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




module.exports = new JobPage();
