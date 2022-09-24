const JobPage = require('../pageobjects/job.page');
const DelDialog = require('../pageobjects/dialogs/delete.dialog');

class DeleteFacade {

    async deleteTitle(title) {
        await JobPage.clickDelTitle(title);
        await DelDialog.confirmDeletion();
    }

}

module.exports = new DeleteFacade();