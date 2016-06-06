'use strict';
(function () {
    var CtLoginPage = function () {
        this.userInput = element(by.model('vm.login.email'));
        this.passwordInput = element(by.model('vm.login.password'));
        this.loginButton = element(by.id('btn-signin'));

        this.navigation = element(by.id('header-menu-profile'));



      //  this.Signout = element(by.css('ul.dropdown-menu > li:nth-child(4) > a:nth-child(1)'));


        //button.btn.btn-main.dropdown-toggle
    };

    CtLoginPage.prototype = {
        login: login
    };

    function login(username, password) {
        console.log('BOOOM');
        this.userInput.sendKeys(username);


        this.passwordInput.sendKeys(password);
        this.loginButton.click();
        console.log('done');
        this.navigation.click();

       // browser.pause();


        //this.Signout.click();

    }


    module.exports = CtLoginPage;
})();

