describe('Travolution Homepage todo list', function () {


    var HOMEPAGE = element(by.css('[ui-sref="home"]'));

    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('');
        browser.driver.manage().window().maximize();

    }

    describe('Top stories section', function () {
        it('should have 3 elements loaded by default', function () {
            var competitionsSection = element(by.css('section.gallery-featured'));
            var competitionsElements = competitionsSection.all(by.repeater('gallery-item__overlay'));

        });
    });

    describe('Headlines section', function () {
        it('should have 8 clicks by default', function () {

            var clickFirstNews = getHeadlineRepeater(0);
            var clickSecondnews = getHeadlineRepeater(1);

            //checking 1 and 8 is same

//

        });
    });


    describe('Indepth section', function () {
        it('should have 3 elements loaded by default', function () {
            var topStories = element(by.css('section.article in vm.articles'));

            var firstImage = getIndepthRepeater(0);

        });
    });



    describe('OtherTechnews section', function(){

        it('should check the elemnts in the section',function(){


            var checkthefirstnews = element(by.repeater('rss in vm.news')).click();


        } )

    })


    describe('Footer section', function () {
        it('should read the footer section', function () {
            var FooterSection = element(by.css('footer.site-footer'));
            var FooterElements = FooterSection.all(by.repeater('item in vm.menuLinks'));


        });


    });


    /**
     * @param {Number} position
     */

    function   getHeadlineRepeater (position) {
        var menuElement = element(by.repeater('article in vmHome.articlesHeadlines').row(position));


        }



    function   getIndepthRepeater (position) {
        var menuElement = element(by.repeater('article in vm.articles').row(position));


    }
});


