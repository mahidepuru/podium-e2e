
var CtLoginPage = require('./library/Loginpage.js');

var CtRegistrationPage = require('./library/Registration.js');

var CtprofilePage = require('./library/profile.js');

var Ctcreatecompany = require('./library/createcompany.js');

describe('ConnectingTravel todo list',function() {
    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://staging.connectingtravel.com/app/sign-in');
        browser.driver.manage().window().maximize();

    }
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

             loginPage.login('rdepuru+2@gmail.com', 'mahireddy1');



             var createcompany = new Ctcreatecompany();

             //createcompany.createcomp();

             createcompany.viewcompany();

         });
     });

        });

