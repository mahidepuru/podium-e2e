
var CtLoginPage = require('./library/Loginpage.js');//login page

var CtRegistrationPage = require('./library/Registration.js');//Registration page

var CtprofilePage = require('./library/profile.js');//profile page

var Ctcreatecompany = require('./library/createcompany.js');//create company page

describe('ConnectingTravel todo list',function() {
    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://www.connectingtravel.com/app/sign-in');
        browser.driver.manage().Window.Size = new Size(1024, 768);

    }

    //https://www.ring.md/
/*
    describe('registrationaccoun', function () {
        it('welcomes the user', function () {


            var loginPage = new CtLoginPage();

            loginPage.login('rdepuru+2@gmail.com', 'mahireddy1');

            //loginPage.login('rdepuru@gmail.com','mahireddy1');

            // The rest of the test

            var profile = new CtprofilePage();

            profile.profile();




        })
    });

*/

     describe('createcompany', function () {
         it('create company as a user', function () {


             var loginPage = new CtLoginPage();

             loginPage.get();



             var createcompany = new Ctcreatecompany();

             //createcompany.createcomp();

             createcompany.viewcompany();

             this.passwordInput// for example we can call the password input on anyb page because it is given as this. in the page

             //if we gave it as var == it it limited to the particular page

             //

         });
     });

        });

