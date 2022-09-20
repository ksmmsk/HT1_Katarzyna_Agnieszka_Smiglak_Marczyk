
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class JobPage extends Page {

    get btnAdd () {
        return $('button=Add');
    }

    get inputJobTitle () {
        return $('/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input')
    }

    get inputJobDescription () {
        return $('/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/textarea')
    }

    get inputJobNote () {
        return $('/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[2]/textarea')
    }

    get btnSave () {
        return $('button[type="submit"]');
    }

    async addJobTitle () {
        await this.btnAdd.click();
    }

    async saveJobTitle (title, desc, note) {
        await this.inputJobTitle.setValue(title);
        await this.inputJobDescription.setValue(desc);
        await this.inputJobNote.setValue(note);
        await this.btnSave.click();
    }

    async isNewTitleAdded (title){
        return $(`div*=${title}`)
    }
}

module.exports = new JobPage();
