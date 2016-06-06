describe('travel weekly homepage todo list', function () {


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://staging.travelweekly.co.uk');
    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {
            expect(browser.getTitle()).toEqual('Travel Industry News and Travel Jobs from Travel Weekly | Travel Weekly');
        });
    });


    describe('Competition section', function () {
        it('should have 3 elements loaded by default', function () {
            var competitionsSection = element(by.css('section.home-competitions'));
            var competitionsElements = competitionsSection.all(by.repeater('slot in slots'));


            expect(competitionsElements.count()).toEqual(3);
        });
    });

    describe('Footer section', function () {
        it('should have 8 clicks by default', function () {
            var footer = element(by.css('footer.site-footer'));
            var footerElements = footer.all(by.repeater('item in vm.menuLinks'));
            expect(footerElements.count()).toEqual(8);


        });
    });


    describe('Top stories', function () {
        it('should have 3 elements loaded by default', function () {
            var topStories = element(by.css('section.top-stories'));
            var topElements = topStories.all(by.repeater('slot in slots'));

        });
    });


    describe('Highlights section', function () {
        it('should read the highlights section', function () {
            var highlightsSection = element(by.css('section.gallery-featured'));
            var highlightsElements = highlightsSection.all(by.repeater('slot in slots'));


        });


    });


    describe('Comment section', function () {
        it('should click on the author profiles', function () {
            var commentSection = element(by.css('section.gallery-featured'));
            var commentElements = commentSection.all(by.repeater(' author in authors'));

        });
    });

    describe('Destination section', function () {
        it('should have 3 elements', function () {
            var destinationSection = element(by.css('section.destinations home-destinations '));

            var destinationElements = destinationSection.all(by.className('gallery-item'));
        });
    });

    describe('Photos and video', function () {
        it('should have 3 elements', function () {
            var photosandVideo = element(by.css('section.home-photo-video')).click();
            var photosandvideoElements = photosandVideo.all(by.className('gallery-item')).click();
        });
    });

    describe('Events section', function () {
        it('should have four elements', function () {
            var eventsSection = element(by.css('section.home-events')).click();
            var eventssectionElements = eventsSection.all(by.repeater('articles in eventGroups'));

        });
    });


    describe('Dropdown List', function () {
        it('should load all existed elements', function () {
            var dropdownList = element(by.id('main-nav')).click();

            var dropdownElements = dropdownList.all(by.repeater('item in menu track by $index'));


        });
    });


/*
    describe('News Page', function(){
        it('should click on the page', function(){
            var NewsPage = element(by.id('main-nav')).click();
            var NewspageElement =

        })
    })*/



});


