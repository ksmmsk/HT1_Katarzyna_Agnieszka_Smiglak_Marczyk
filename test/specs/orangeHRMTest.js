const LoginPage = require('../pageobjects/login.page');
const PimPage = require('../pageobjects/pim.page');
const AdminPage = require('../pageobjects/admin.page');
const JobPage = require('../pageobjects/job.page');
const DeleteTitle = require('../pageobjects/dialogs/delete.dialog');
const { LoginData } = require('../constants/login.data');
const { JobData } = require('../constants/job.data');
const { UrlData } = require('../constants/url.data');

const allureReporter = require('@wdio/allure-reporter').default;
const allure = require('allure-commandline');

describe('Orange HRM job titles management page', () => {
    before('Open the relevant page', async () => {
        await LoginPage.open();
        await LoginPage.login(LoginData.USER, LoginData.PASSWORD);
        await PimPage.openAdminPanel();
        await AdminPage.viewJobTitles();
      });

 

    it('should add, edit, and delete roles', async () => {
        //adding a role
        await JobPage.addJobTitle();
        newUrl = await browser.getUrl();
        await expect(newUrl).toBe(UrlData.ADDJOBTITLE);
        await JobPage.saveJobTitle(JobData.TITLE1,JobData.DESC,JobData.NOTE);
        const title = await JobPage.titleElement(JobData.TITLE1);
        await expect(title).toExist();
        const desc = await JobPage.titleDesc(JobData.DESC);
        await expect(desc).toExist();        
        //editing a role
        await JobPage.clickEditTitle(JobData.TITLE1);
        await JobPage.editTitle(JobData.DESC2);
        const el = await JobPage.titleDesc(JobData.DESC2);
        await expect(el).toExist();
        //deleting a role
        await JobPage.clickDelTitle(JobData.TITLE1);
        await DeleteTitle.confirmDeletion();
        const deleted = await JobPage.doesTitleExist(JobData.TITLE1);
        await expect(deleted).toBeTruthy();
    })
});

