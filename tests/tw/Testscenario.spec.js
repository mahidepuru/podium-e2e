

describe('travolution homepage todo list', function () {



    var ViewNextElement = element(by.css('fa fa-angle-right'));


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('url');
        browser.driver.manage().window().maximize();

    }

    describe('EventPage checking', function () {
        it('should click the author page', function () {

            var Element = element(by.css('section.photo-video')).click();


            var viewPhoto = element(by.css('[ui-sref="media.photo({id: album.id, slug: album.slug})"]')).click();

            //  ViewNextElement.click();


        });
    });



    describe('Feature slot2 Testing', function(){

        it('should click the slot', function(){

            var Slot2Element = element(by.css('section.gallery-item gallery-item--small')).click();

        });

    });
    describe('Feature slot3 Testing', function(){

        it('should click the slot3', function(){

            var Slot3Element = element(by.css('section.gallery-item gallery-item--small')).click();

        });

    });

    describe('Page Testing', function(){

        it('should click the slot3', function(){

            var AlbumListElement = element(by.css('section.more-headlines')).click();
            var topElements = AlbumListElement.all(by.repeater('albums in albumGroup'));


        });

    });

});
