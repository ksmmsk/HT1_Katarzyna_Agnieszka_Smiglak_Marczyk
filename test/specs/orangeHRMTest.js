const LoginPage = require('../pageobjects/login.page');
const PimPage = require('../pageobjects/pim.page');
const AdminPage = require('../pageobjects/admin.page');
const JobPage = require('../pageobjects/job.page');
const DeleteTitle = require('../pageobjects/dialogs/delete.dialog');

describe('H&R management app', () => {
    const titleToAdd = 'Sorcerers';

    before(async () => {
        await LoginPage.open();
      });
      
    it('should redirect to the login page', async () => { 
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('Admin', 'admin123');
        //expect(browser.getUrl()).toHaveTextContaining('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        const loggedInUrl = await browser.getUrl();
        expect(loggedInUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    });

    it('should open the admin panel from the menu', async () => {
        await PimPage.openAdminPanel();
        const adminUrl = await browser.getUrl();
        expect(adminUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    })

    it('should open the job title page', async () => {
        await AdminPage.viewJobTitles();
        let newUrl = await browser.getUrl();
        expect(newUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
    })


    it('should add new roles', async () => {
        await JobPage.addJobTitle();
        newUrl = await browser.getUrl();
        expect(newUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');
        await JobPage.saveJobTitle(titleToAdd,'Desc1','Note');
        const el = await JobPage.titleElement(titleToAdd);
        await expect(el).toExist();        
    })

    it('should edit existing roles', async () => {
        let newUrl = await browser.getUrl();
        expect(newUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
        await JobPage.clickEditTitle(titleToAdd);
        const editedDesc = 'Edited Desc'
        await JobPage.editTitle(editedDesc);
        const el = await JobPage.titleDesc(editedDesc);
        await expect(el).toExist();
    })

    it('should delete existing role', async () => {
        let newUrl = await browser.getUrl();
        expect(newUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
        await JobPage.clickDelTitle(titleToAdd);
        await DeleteTitle.confirmDeletion();
        const deleted = await JobPage.doesTitleExist(titleToAdd);
        expect(deleted).toBeTruthy();
    })
});

