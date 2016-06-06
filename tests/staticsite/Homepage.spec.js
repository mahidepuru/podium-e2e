describe('travel weekly homepage todo list', function () {


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://www.travelgbi.com');
    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {
            expect(browser.getTitle()).toEqual('Domestic and inbound travel and tourism news | Travel GBI');
        });
    });


    describe('Slider section', function () {
        it('should have 3 elements loaded by default', function () {
            var sliderElement = element(by.repeater('slot in vm.sliderData.slots'));

            sliderElement.click();

        });
    });


});