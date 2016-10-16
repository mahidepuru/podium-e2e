describe('travel weekly homepage todo list', function () {
    'use strict';
    var newsNav = element(by.xpath('/html/body/div[1]/div[1]/header/nav[2]/pa-main-menu/div/div/div/pa-main-menu-navigation/ul/li[2]/a'));
    var home =  element(by.css('[ui-sref="home"]'));
    var newmenudisplay = element(by.xpath('/html/body/div[1]/layout-header/ng-include/header/nav[2]/pa-main-menu/div/div/div/pa-main-menu-navigation/ul/li[2]/a'));
   var Indepthmenudisplay = element(by.xpath('/html/body/div[1]/div[1]/header/nav[2]/pa-main-menu/div/div/div/pa-main-menu-navigation/ul/li[3]/a'));

    var LoadMore = element(by.xpath('/html/body/div[1]/main/div/section/section[2]/div/section/div/div/button'));
    var newsstory1 = element(by.css('section.gallery-news'));

    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('');

    }

    describe('news', function () {
        it('should have 3 elements loaded by default', function () {


             var newsMenu = getMenuFirstLevelElement(0);

             var allNewsElement = getMenuDeeperLevelElement(newsMenu,0);


             allNewsElement.click();


             newsstory1.click();


             //browser.pause();

             home.click();

             // browser.debugger();

             var newsMenu = getMenuFirstLevelElement(0);


             var travelAgents = getMenuDeeperLevelElement(newsMenu,1);

             travelAgents.click();

             newsstory1.click();



             var newsMenu = getMenuFirstLevelElement(0);

             var tourOperators = getMenuDeeperLevelElement(newsMenu,2);

             tourOperators.click();

             var newsMenu = getMenuFirstLevelElement(0);


             var cruise = getMenuDeeperLevelElement(newsMenu,3);

             cruise.click();

             newsstory1.click();
             var newsMenu = getMenuFirstLevelElement(0);

             var air = getMenuDeeperLevelElement(newsMenu,4);

             cruise.click();
             var newsMenu = getMenuFirstLevelElement(0);

             var accomidation = getMenuDeeperLevelElement(newsMenu,5);

             accomidation.click();


             var newsMenu = getMenuFirstLevelElement(0);

             var people = getMenuDeeperLevelElement(newsMenu,6);

             people.click();

             var newsMenu = getMenuFirstLevelElement(0);

             var finance = getMenuDeeperLevelElement(newsMenu,7);
             finance.click();

             var newsMenu = getMenuFirstLevelElement(0);

             var regulation = getMenuDeeperLevelElement(newsMenu,8);

             regulation.click();


              var newsMenu = getMenuFirstLevelElement(0);


             var aspireExternalsite = getMenuDeeperLevelElement(newsMenu,9);

             aspireExternalsite.click();

             var travolutionsite = getMenuDeeperLevelElement(newsMenu,10);

             travolutionsite.click();

        });
    });




            describe('Indepth', function () {
                it('should have click on all indepth elements loaded by default', function () {

            var indepthnewsMenu = getInDepthElement(1);

            var comment = getMenuDeeperLevelElement(indepthnewsMenu,0);


            comment.click();



            var indepthnewsMenu = getInDepthElement(1);


            var interviews = getMenuDeeperLevelElement(indepthnewsMenu,1);

            interviews.click();

            var indepthnewsMenu = getInDepthElement(1);

            var specialreports = getMenuDeeperLevelElement(indepthnewsMenu,2);

            specialreports.click();

            var indepthnewsMenu = getInDepthElement(1);


            var readerslives = getMenuDeeperLevelElement(indepthnewsMenu, 3);

            readerslives.click();

            var indepthnewsMenu = getInDepthElement(1);

            var productFeatues = getMenuDeeperLevelElement(indepthnewsMenu,4);

            productFeatues.click();

        });
    });

    function getMenuFirstLevelElement(position) {
        var menuElement = element(by.repeater('item in menu track by $index').row(position));
        browser.actions().mouseMove(menuElement).perform();

        return menuElement;
    }





    /**
     * @param {Object} parentElement
     * @param {Number} position
     */
    function getMenuDeeperLevelElement(parentElement, position) {
        var menuElement = parentElement.element(by.repeater('item in item.sub').row(position));
        browser.actions().mouseMove(menuElement).perform();

        return menuElement;
    }



    function getInDepthElement(position) {
        var menuElement = element(by.repeater('item in menu track by $index').row(position));
        browser.actions().mouseMove(menuElement).perform();

        return menuElement;

    }
});

