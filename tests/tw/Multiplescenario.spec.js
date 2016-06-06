/**
 * Created by damian on 19/01/16.
 */

describe('travel weekly homepage todo list', function () {
    var competitionsSection = element(by.css('section.home-competitions'));
    var competitionsElements = competitionsSection.all(by.repeater('slot in slots'));



    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://travelweekly.co.uk');
    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {
            expect(browser.getTitle()).toEqual('Travel Industry News and Travel Jobs from Travel Weekly | Travel Weekly');
        });
    });

        it('should have 3 elements loaded by default', function () {


            expect(competitionsElements.count()).toEqual(3);
        });
    });

