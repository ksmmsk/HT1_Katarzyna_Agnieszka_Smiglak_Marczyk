
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class JobPage extends Page {

    get btnAdd () {
        return $('div.orangehrm-header-container button');
    }

    get inputJobTitle () {
        return $('form input');
    }

    get inputJobDescription () {
        return $$('textarea')[0];
    }

    get inputJobNote () {
        return $$('textarea')[1];
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

    async titleElement (title){
        return $(`div=${title}`)
    }

    async doesTitleExist(title){
        return $(`div=${title}`).waitForExist({ timeout : 5000 , reverse : true})
    }

    async titleDesc (desc){
        return $(`div=${desc}`)
    }

    async btnEditTitle(title){
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                return await elem.$('div button:nth-child(2)');
            } 
        }

    }

    async btnDelTitle(title){
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                return await elem.$('div button:nth-child(1)');
            } 
        }
    }

    async clickEditTitle (title){
        const btnEdit = await this.btnEditTitle(title);
        await btnEdit.click();
    }

    async clickDelTitle (title){
        const btnDel = await this.btnDelTitle(title);
        await btnDel.click();
    }

    async editTitle (newDesc){
        await this.inputJobDescription.click()
        const currentDesc = await this.inputJobDescription.getValue();
        const len = currentDesc.length;
        const backspaces = new Array(len).fill("Backspace");
        await this.inputJobDescription.setValue(backspaces); 
        await this.inputJobDescription.setValue(newDesc);
        await this.btnSave.click();
    }
}

module.exports = new JobPage();
