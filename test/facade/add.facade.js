const JobPage = require('../pageobjects/job.page');
const EditPage = require('../pageobjects/edit.page')

class AddFacade {

    async addTitle(title, desc, note) {
        await JobPage.addJobTitle();
        await EditPage.saveJobTitle(title, desc, note);
    }

}

module.exports = new AddFacade();