describe('travolution homepage todo list', function () {
    'use strict';



    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('');
        browser.driver.manage().window().maximize();

    }

    describe('search Articles ', function () {
        it('should check the search result', function () {


            var nav = element(by.xpath('//*[@id="main-nav"]/ul/li[1]/a')).click();

            var serachTextBox = element(by.model('vm.query'));

            serachTextBox.sendKeys('travel sector');

            var searhsubmitButton = element(by.css('[ng-click="vm.search(vm.query)"]')).click();


        });
    });
});

