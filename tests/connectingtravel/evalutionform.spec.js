var PageObjects = require('./library/PageObjects.js');//login page

//var width = 750;
//var height = 1334;


fdescribe('YOPA todo list', function () {



    beforeEach(beforeEachSetup);

    function beforeEachSetup() {

        browser.ignoreSynchronization = true;

        browser.get('https://tungsten-network--uat.cs82.my.salesforce.com');

        browser.driver.manage().window().maximize();


    }

    describe('EvaltionForm', function () {
        it('should navigate to navigate to the work flow', function () {


            var emailTextBox = element(by.id('username')).sendKeys('mahidhar.depuru@tungsten-network.com.uat');

            var  password= element(by.id('password')).sendKeys('MAHIreddy1989');

            var loginButton = element(by.id('Login')).click();

            var actionButton = element(by.id('actionCard_Account'));

            var actionButon = element(by.id('createNewButton'));
            actionButton.click();

            browser.pause();







        //browser.pause();

       // var password Pass = element(by.id('password')).sendKeys('MAHIreddy1989');


            //var button = element(by.id('Login')).click()


     //var Element = element(by.xpath('//*[@id="telugunews_menu"]/ul/li[2]/a'));

           // PageObjects.menuField
                //sendKeys('E62DZ');

//              Memu.click();

  //          var subMitButton = element(by.xpath('//*[@id="telugunews_menu"]/ul/li[3]/a')).click();


        })
    })

});


//protractor works on non angular applications as well


