describe('travolution homepage todo list', function () {
    'use strict';


    var NewsMenuselector = element(by.css('[ng-click ="handleClick(item, $event)"]'));

    var LoadMore = element(by.xpath('/html/body/div[1]/main/div/section/section[2]/div/section/div/div/button'));


    var newsstory1 = element(by.css('[ui-sref="article.slug({articleId: vm.featuredArticle.easId, slug: vm.featuredArticle.slug})"]'));
    var width = 1600;
    var height = 1200;



    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://travolution.com/');
        browser.driver.manage().window().setSize(width, height);

    }

    describe('IndepthAllnews ', function () {
        it('should click on the regulation', function () {


            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);

            travelSectors.click();

            var travelAgents = getMenuDeeperLevelElement(travelSectors, 1);

            travelAgents.click();


            newsstory1.click();


            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);

            var tourOperators = getMenuDeeperLevelElement(travelSectors, 2);

            tourOperators.click();


            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);


            var Intermediaries = getMenuDeeperLevelElement(travelSectors, 3);

            Intermediaries.click();

            newsstory1.click();


            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);


            var accomidation = getMenuDeeperLevelElement(travelSectors, 4);

            accomidation.click();

            newsstory1.click();


            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);

            var air = getMenuDeeperLevelElement(travelSectors, 5);

            air.click();


            newsstory1.click();

            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);

            var cruise = getMenuDeeperLevelElement(travelSectors, 6);

            cruise.click();


            newsstory1.click();

            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);


            var car = getMenuDeeperLevelElement(travelSectors, 7);

            car.click();

            newsstory1.click();

            NewsMenuselector.click();

            var menuNews = getMenuFirstLevelElement(0);

            var travelSectors = getMenuDeeperLevelElement(menuNews, 1);

            var toursandactivities = getMenuDeeperLevelElement(travelSectors, 8);

            toursandactivities.click();

            newsstory1.click();


            var menuNews = getMenuFirstLevelElement(0);


            var marketing = getMenuDeeperLevelElement(menuNews, 12);


            marketing.click();

            newsstory1.click();
            var menuNews = getMenuFirstLevelElement(0);

            var gadgets = getMenuDeeperLevelElement(menuNews, 13);

            gadgets.click();
            newsstory1.click();
            var menuNews = getMenuFirstLevelElement(0);

            var social = getMenuDeeperLevelElement(menuNews, 14);

            social.click();
            newsstory1.click();

            var menuNews = getMenuFirstLevelElement(0);
            var people = getMenuDeeperLevelElement(menuNews, 15);

            people.click();
            newsstory1.click();
            var menuNews = getMenuFirstLevelElement(0);
            var technology = getMenuDeeperLevelElement(menuNews, 16);
            technology.click();
            newsstory1.click();

            var menuNews = getMenuFirstLevelElement(0);
            var suppliers = getMenuDeeperLevelElement(menuNews, 17);
            suppliers.click();

            newsstory1.click();


            //Indepth Menu Testing


            var IndepthClick = getMenuFirstLevelElement(1);
            var AllIndepthNews = getMenuDeeperLevelElement(IndepthClick, 0);

            AllIndepthNews.click();
            newsstory1.click();


            var IndepthClick = getMenuFirstLevelElement(1);



            var guestPost = getMenuDeeperLevelElement(IndepthClick, 1);

            guestPost.click();
            newsstory1.click();


            var IndepthClick = getMenuFirstLevelElement(1);


            var bigInterviews = getMenuDeeperLevelElement(IndepthClick, 2);

            bigInterviews.click();



            var IndepthClick = getMenuFirstLevelElement(1);


            var companyProfile = getMenuDeeperLevelElement(IndepthClick, 3);

            companyProfile.click();


            newsstory1.click();


            var IndepthClick = getMenuFirstLevelElement(1);


            /*

            var conferencesAndEvents = getInDepthElement(IndepthClick, 4);

            conferencesAndEvents.click();


            newsstory1.click();

*/


        });
    });





    /**
     * @param {Number} position
     */
    function getMenuFirstLevelElement(position) {
        var menuElement = element(by.repeater('item in menu').row(position));
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


    /**
     * @param {Number} position
     */
    function getInDepthElement(position) {
        var menuElement = element(by.repeater('item in menu track by $index').row(position));
        browser.actions().mouseMove(menuElement).perform();

        return menuElement;
    }




});



