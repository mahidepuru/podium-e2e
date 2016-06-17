fdescribe('YOPA todo list', function () {


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://qa.yopa.uk/');
    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {
            expect(browser.getTitle()).toEqual('YOPA:The affordable, quick & simple way to sell your home');
        });
    });


    describe('EvaltionForm', function () {
        it('should navigate to navigate to the work flow', function () {


            var enterPostcodeElement = element(by.name('postcode'));

            enterPostcodeElement.sendKeys('E62DZ');



            var latestNewsElement = element(by.buttonText('submit'));

            latestNewsElement.click();





        })
    })

});




