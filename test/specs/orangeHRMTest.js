const LoginPage = require('../pageobjects/login.page');
const PimPage = require('../pageobjects/pim.page');
const AdminPage = require('../pageobjects/admin.page');
const JobPage = require('../pageobjects/job.page');
const DeleteFacade = require('../facade/delete.facade');
const AddFacade = require('../facade/add.facade');
const EditFacade = require('../facade/edit.facade');
const { LoginData } = require('../constants/login.data');
const { JobData } = require('../constants/job.data');

const allureReporter = require('@wdio/allure-reporter').default;
const allure = require('allure-commandline');

describe('Orange HRM job titles management page', () => {
    before('Open the relevant page', async () => {
        await LoginPage.openMainPage();
        await LoginPage.login(LoginData.USER, LoginData.PASSWORD);
        await PimPage.openAdminPanel();
        await AdminPage.viewJobTitles();
      });

    it('should add, edit, and delete roles', async () => {
        //adding a role
        AddFacade.addTitle(JobData.TITLE1,JobData.DESC,JobData.NOTE);
        const title = await JobPage.titleElement(JobData.TITLE1);
        await expect(title).toExist();
        const desc = await JobPage.titleDesc(JobData.DESC);
        await expect(desc).toExist();        
        //editing a role
        EditFacade.editTitle(JobData.TITLE1,JobData.DESC2);
        const editedDesc = await JobPage.titleDesc(JobData.DESC2);
        await expect(editedDesc).toExist();
        //deleting a role
        await DeleteFacade.deleteTitle(JobData.TITLE1);
        const deleted = await JobPage.doesTitleExist(JobData.TITLE1);
        await expect(deleted).toBeTruthy();
    })
    
});

