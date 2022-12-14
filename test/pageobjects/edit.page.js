const Page = require('./page');

/**
 * sub page class for the adding and editing Job Titles page
 */
class EditPage extends Page {

    get inputJobTitle() {
        return $('form input');
    }

    get inputJobDescription() {
        return $(`textarea[placeholder="Type description here"]`)
    }

    get inputJobNote() {
        return $(`textarea[placeholder="Add note"]`)
    }

    get btnSave() {
        return $('button[type="submit"]');
    }

    async saveJobTitle(title, desc, note) {
        await this.inputJobTitle.setValue(title);
        await this.inputJobDescription.setValue(desc);
        await this.inputJobNote.setValue(note);
        await this.btnSave.click();
    }

    async editTitle(newDesc) {
        await this.inputJobDescription.click()
        const currentDesc = await this.inputJobDescription.getValue();
        const len = currentDesc.length;
        const backspaces = new Array(len).fill("Backspace");
        await this.inputJobDescription.setValue(backspaces);
        await this.inputJobDescription.setValue(newDesc);
        await this.btnSave.click();
    }
}

module.exports = new EditPage();
