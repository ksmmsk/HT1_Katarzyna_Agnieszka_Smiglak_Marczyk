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

describe('Orange HRM job titles management page', () => {
    before('Login', async () => {
        await browser.setTimeout({ 'implicit': 5000 })
        await LoginPage.openMainPage();
        await LoginPage.login(LoginData.USER, LoginData.PASSWORD);
    });

    beforeEach('Open the relevant page', async () => {
        await LoginPage.openMainPage();
        await PimPage.openAdminPanel();
        await AdminPage.viewJobTitles();
    })

    it('should add new roles', async () => {
        await AddFacade.addTitle(JobData.TITLE1, JobData.DESC1, JobData.NOTE);
        const title = await JobPage.titleElement(JobData.TITLE1);
        await expect(title).toExist();
        const desc = await JobPage.titleDesc(JobData.DESC1);
        await expect(desc).toExist();
        await DeleteFacade.deleteTitle(JobData.TITLE1);
    })

    it.only('should edit existing roles', async () => {
        await AddFacade.addTitle(JobData.TITLE1, JobData.DESC1, JobData.NOTE);
        await EditFacade.editTitle(JobData.TITLE1, JobData.DESC2);
        const editedDesc = await JobPage.titleDesc(JobData.DESC2);
        await expect(editedDesc).toExist();
        await DeleteFacade.deleteTitle(JobData.TITLE1);
    })

    it('should delete existing role', async () => {
        await AddFacade.addTitle(JobData.TITLE1, JobData.DESC1, JobData.NOTE);
        await DeleteFacade.deleteTitle(JobData.TITLE1);
        const deleted = await JobPage.doesTitleExist(JobData.TITLE1);
        await expect(deleted).toBeTruthy();
    })

});


