describe('travolution homepage todo list', function () {
     'use strict';

     var newsNav = element(by.css('[ng-click ="handleClick(item, $event)"]'));

     var home = element(by.css('[ui-sref="home"]'));



    var newsstory1= element(by.css('[ui-sref="article.slug({articleId: vm.featuredArticle.easId, slug: vm.featuredArticle.slug})"]'));

     beforeEach(beforeEachSetup);

     function beforeEachSetup() {
         browser.get('http://staging.travolution.com/news');
         browser.driver.manage().window().maximize();

     }

     describe('news', function () {
         it('should have viewArticle', function () {

             var newsNav = getMenuFirstLevelElement(0);

             var travelSectors = getMenuDeeperLevelElement(newsNav, 1);

             travelSectors.click();

             var travelAgents = getMenuDeeperLevelElement(travelSectors, 1);


             travelAgents.click();
             newsstory1.click();


          var clickOnTag = element(by.binding('Travelagents'));


             //   newsstory1.click();

             //share not working, not able to pick the elements ---- //



             var facebookShareElement = element(by.css('.social-links > li:nth-child(1) > a:nth-child(1) > i:nth-child(1)')).click();


             var twitterShareElement = element(by.css('.social-links > li:nth-child(2) > a:nth-child(1) > i:nth-child(1)')).click();

             var linkedinshareElement = element(by.css('.social-links > li:nth-child(3) > a:nth-child(1) > i:nth-child(1)')).click();

             var mostTrending = element(by.css('[ui-sref= "article.slug({articleId: row.article.easId, slug: row.article.slug})"]')).click();

            // var moreINCategory = element(by.repeater('row in vm.mostRead')).click();


         });
     });




     function getMenuFirstLevelElement(position) {
         var menuElement = element(by.repeater('item in menu').row(position));
         browser.actions().mouseMove(menuElement).perform();

         return menuElement;
     }


     function getMenuDeeperLevelElement(parentElement, position) {
         var menuElement = parentElement.element(by.repeater('item in item.sub').row(position));
         browser.actions().mouseMove(menuElement).perform();

         return menuElement;
     }

 });
