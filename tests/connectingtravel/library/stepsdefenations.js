'use strict';
(function () {
    var CtLoginPage = function () {
        var userInput = element(by.model('vm.login.email'));
        var passwordInput = element(by.model('vm.login.password'));
        var loginButton = element(by.id('btn-signin'));

        var navigation = element(by.id('header-menu-profile'));
    };

    CtLoginPage.prototype = {
        login: login

    }


    module.exports = CtLoginPage;
})();


this.Given(/^I am on the homepage$/, function(arg1, callback) {
    browser.get(this, 'https://connectingtravel.com/signin');
    callback();
    });


this.When(/^I enter username as '<username>' and password as '<password>'$/, function(username, password) {
    userInput.sendKeys('rdepuru+2@gmail.com');
    passwordInput.sendKeys('mahireddy1');
    loginButton.click();
        });


    this.Then(/^it should display dashboard$/, function(link, callback) {
        navigation.click();
        });




