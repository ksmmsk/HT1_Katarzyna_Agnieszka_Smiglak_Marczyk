const JobPage = require('../pageobjects/job.page');
const EditPage = require('../pageobjects/edit.page')

class EditFacade {

    async editTitle(title, desc) {
        await JobPage.clickEditTitle(title);
        await EditPage.editTitle(desc);
    }

}

module.exports = new EditFacade();