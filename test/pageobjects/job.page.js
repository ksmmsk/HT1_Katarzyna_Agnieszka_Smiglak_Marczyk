const Page = require('./page');

/**
 * sub page class for the Job Titles page (Admin -> Job -> Job Titles)
 */
class JobPage extends Page {

    get btnAdd() {
        return $('div.orangehrm-header-container button');
    }

    async addJobTitle() {
        await this.btnAdd.click();
    }

    async titleElement(title) {
        return $(`div=${title}`)
    }

    async doesTitleExist(title) {
        return $(`div=${title}`).waitForExist({ timeout: 5000, reverse: true })
    }

    async titleDesc(desc) {
        return $(`div=${desc}`)
    }

    async btnEditTitle(title) {
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                return await elem.$('div button:nth-child(2)');
            }
        }
    }

    async btnDelTitle(title) {
        const allElems = await $$('.oxd-table-row.oxd-table-row--with-border')
        for (let elem of allElems) {
            let html = await elem.getHTML();
            if (html.includes(title)) {
                return await elem.$('div button:nth-child(1)');
            }
        }
    }

    async clickEditTitle(title) {
        const btnEdit = await this.btnEditTitle(title);
        await btnEdit.click();
    }

    async clickDelTitle(title) {
        const btnDel = await this.btnDelTitle(title);
        await btnDel.click();
    }
}

module.exports = new JobPage();
