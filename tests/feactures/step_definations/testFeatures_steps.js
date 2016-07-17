var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    //var ptor = protractor.getInstance();

    this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
        browser.get('http://telugunews4u.com');
        callback()
    });

    this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
        expect(browser.getTitle()).to.eventually.equal(arg1).and.notify(callback);
    });

    this.Then(/^the menu should contain "([^"]*)"$/, function (arg1, callback) {
        element.all(by.css('.nav li')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === arg1;
            });
        }).then(function(filteredElements) {
            expect(filteredElements).to.have.length(1);
            callback();
        });
    });
}
/*this.Given('I am on the login page', function (done) {
 browser.get('#/login').then(function () {
 done();
 });
 });
 this.When('I login', function (done) {
 var user = 'ben', pass = 'pass';
 element(by.css('.email'))
 .sendKeys(user)
 .then(function() {
 return element(by.css('.password'))
 .sendKeys(pass)
 });
 .then(function() {
 return element(by.tagName('button')).click();
 });
 .then(function() {
 done();
 });
 });
 this.Then('I should be logged in', function (done) {
 browser.getCurrentUrl().then(function (url) {
 assert.equal(url, '#/login');
 done();
 });
 });