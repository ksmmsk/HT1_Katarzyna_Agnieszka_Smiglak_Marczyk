
const Page = require('./page');

/**
 * sub page class for the management page visible after logging in
 */
class EditPage extends Page {

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

    async saveJobTitle (title, desc, note) {
        await this.inputJobTitle.setValue(title);
        await this.inputJobDescription.setValue(desc);
        await this.inputJobNote.setValue(note);
        await this.btnSave.click();
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

module.exports = new EditPage();
