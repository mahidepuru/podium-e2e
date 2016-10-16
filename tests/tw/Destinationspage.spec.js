describe('travel weekly homepage Destination Page todo list', function () {

    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('h');
        browser.driver.manage().window().maximize();

    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {


            var destMenu = getMenuFirstLevelElement(2);

            destMenu.click();

            var mpu = element(by.id('mpu-1-destination')).click();

            var scrollerNextPage =  element(by.css('[ng-click ="nextPage()"]')).click();

            scrollerNextPage.click();



            //]var mpu2 = element(by.id('mpu-2-destination')).click();


            var privousPage = element(by.css('[ng-click="previousPage()"]')).click();







            var clickonNews = element(by.css('section.gallery-featured')).click();





        });
    });

    describe('Search functionTesting', function () {
        it('the search should filter and give the result', function () {



            var destMenu = getMenuFirstLevelElement(2);

            destMenu.click();

            var Textbox = element(by.model('searchForm.query')).click();


            Textbox.sendKeys('India');

            var filter = element(by.repeater('country in filters.countries')).click();

            var fileterTags = element(by.repeater('feature in filters.features')).click();
        });


});




function getMenuFirstLevelElement(position) {
    var menuElement = element(by.repeater('item in menu track by $index').row(position));
    browser.actions().mouseMove(menuElement).perform();

    return menuElement;
}

});