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

describe('H&R management app', () => {
    before(async () => {
        await LoginPage.open();
        browser.setWindowSize(960, 900);
      });
      

    it('should add new roles', async () => {
        await LoginPage.login(LoginData.USER, LoginData.PASSWORD);
        await PimPage.openAdminPanel();
        await AdminPage.viewJobTitles();
        await JobPage.addJobTitle();
        newUrl = await browser.getUrl();
        expect(newUrl).toBe(UrlData.ADDJOBTITLE);
        await JobPage.saveJobTitle(JobData.TITLE1,JobData.DESC,JobData.NOTE);
        const el = await JobPage.titleElement(JobData.TITLE1);
        await expect(el).toExist();        
    })

    it('should edit existing roles', async () => {
        let newUrl = await browser.getUrl();
        expect(newUrl).toBe(UrlData.JOBTITLELIST);
        await JobPage.clickEditTitle(JobData.TITLE1);
        await JobPage.editTitle(JobData.DESC2);
        const el = await JobPage.titleDesc(JobData.DESC2);
        await expect(el).toExist();
        
    })

    it('should delete existing role', async () => {
        let newUrl = await browser.getUrl();
        expect(newUrl).toBe(UrlData.JOBTITLELIST);
        await JobPage.clickDelTitle(JobData.TITLE1);
        await DeleteTitle.confirmDeletion();
        const deleted = await JobPage.doesTitleExist(JobData.TITLE1);
        expect(deleted).toBeTruthy();
    })
});

