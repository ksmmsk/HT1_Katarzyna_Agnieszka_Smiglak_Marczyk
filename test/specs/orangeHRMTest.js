const LoginPage = require('../pageobjects/login.page');


describe('H&R management app', () => {

    beforeEach(async () => {
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
});

