var support = require('../support');

var steps = function() {

    this.Given(/^I am on the loginpage$/, function(callback) {
        support.get(this, 'https://connectingtravel.com/signin', function(result){
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should see a emailaddress TextBox$/, function(link, callback) {
        support.findByBinding(this, link, function(result){
            result.getText().then (function(text){
                text.trim().toLowerCase().should.equal(link.trim().toLowerCase());
                setTimeout(callback, 1000);
            });
        });
    });

    this.Then(/^I should see a "password" TextBox$/, function(link, callback) {
        support.isElementPresent(this, link, function(result){
            result.should.equal(false);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should see a "signin" link"$/, function(link, callback) {
        support.isElementPresentByClass(this, link, function(result){
            result.should.equal(true);
            setTimeout(callback, 1000);
        });
    });

};

module.exports = steps;