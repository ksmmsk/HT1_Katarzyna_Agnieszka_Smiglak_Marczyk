
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

    async titleElement (title){
        return $(`div=${title}`)
    }

    async doesTitleExist(title){
        return $(`div=${title}`).waitForExist({ timeout : 5000 , reverse : true})
    }

    async titleDesc (desc){
        return $(`div=${desc}`)
    }

    async clickEditTitle (title){
        await $(`.oxd-table-row.oxd-table-row--with-border`).waitForExist({ timeout : 5000 })
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        let btnEdit;
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                btnEdit = await elem.$('div button:nth-child(2)');
                break;
            } 
        }
        await btnEdit.click();
    }

    async clickDelTitle (title){
        await $(`.oxd-table-row.oxd-table-row--with-border`).waitForExist({ timeout : 5000 })
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        let btnDel;
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                btnDel = await elem.$('div button:nth-child(1)');
                break;
            } 
        }
        await btnDel.click();
    }

    async editTitle (newDesc){
        await this.inputJobDescription.click()
        await this.inputJobDescription.doubleClick() 
        await browser.keys(['Control', 'a']); //workaround because setValue or clearValue do not work
        await browser.keys('Delete')
        await this.inputJobDescription.setValue(newDesc);
        await this.btnSave.click();
    }
}

module.exports = new JobPage();
