

describe('travolution homepage todo list', function () {

    var LoadMore = element(by.css('[ng-click ="vm.loadMore()"]'));

    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('h');
        browser.driver.manage().window().maximize();

    }

    describe('Author Page checking', function () {
        it('should click the author page', function () {



            var NewsStory = element(by.css('[ui-sref="article.slug({articleId: article.easId, slug: article.slug})"]')).click();


            browser.get('http://staging.travolution.com/articles/author/29/Tom%20Irwin');
            LoadMore.click();

            var trendingArticlElements = element(by.repeater('row in vm.mostRead').row(1));

            //checks the trending article elements



        });
    });
});