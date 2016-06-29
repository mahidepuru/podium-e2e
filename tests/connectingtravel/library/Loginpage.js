'use strict';
(function () {
    var CtLoginPage = function () {


      //  this.Signout = element(by.css('ul.dropdown-menu > li:nth-child(4) > a:nth-child(1)'));


        //button.btn.btn-main.dropdown-toggle
    };

    CtLoginPage.prototype = {
        login: login
    };

    function login(username, password) {
        console.log('BOOOM');
        this.userInput.sendKeys('rdepuru+2@gmail.com');


        this.passwordInput.sendKeys('mahireddy1');
        this.loginButton.click();
        console.log('done');
        this.navigation.click();

       // browser.pause();


        //this.Signout.click();

    }


    module.exports = CtLoginPage;
})();

