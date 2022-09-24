const { UrlData } = require('../constants/url.data');
module.exports = class Page {

    openMainPage () {
        return browser.url(UrlData.MAINPAGE);
    }
}
