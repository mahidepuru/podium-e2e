
(function () {
    var CtRegistrationPage = function () {

        module.exports = CtRegistrationPage;

        CtRegistrationPage.prototype = {
            register: register,
            facebookregister: facebookregister

        };


        var joinNowbutton = element(by.css('[ui-srfe="/register"]'));

        this.userfirtsNameInput= element(by.id('firstname'));
        this.userLastNameInput = element(by.id('lastname'));

        this.emailInput = element(by.model('email'));
        this.passwordInput= element(by.id('password'));

        var signupButton = element(by.css('[ng-click ="vm.nextStep()"]'));

        var employementSelcetion = element(by.model('user.register.jobStatusId'));

        //button.btn.btn-main.dropdown-toggle


        function register(firstname, lastname, username, password) {
            console.log('BOOOM');


            //  this.joinNowbutton.click();

            this.userfirtsNameInput.sendKeys(firstname);
            this.userLastNameInput.sendKeys(lastname);

            this.emailInput.sendKeys(username);


            this.passwordInput.sendKeys(password);

            signupButton.click();

            console.log('done');

            employementSelcetion.sendKeys('Employed');

        }



        function  facebookregister(){


            var clickFbButton = element(by.css('.btn-facebook')).click();

            var fbuserName=element(by.id('email')).sendKeys('mahidhar.depuru@gmail.com');

            var fbPassword = element(by.id('pass')).click();


        }
    }


    })();
