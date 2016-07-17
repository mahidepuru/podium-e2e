
describe('angularjs homepage', function() {
    it('should have a title', function () {
        browser.ignoreSynchronization = true;

        browser.get('http://telugunews4u.com');

        expect(browser.getTitle()).toEqual('Welcome TeluguNews4U');
    });
});