

const Page = require('./page');

/**
 * sub page for the login page
 */
class LoginPage extends Page {

    get inputUsername () {
        return $('[name="username"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

module.exports = new LoginPage();
