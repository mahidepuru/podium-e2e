

module.exports = {


    pageobjects:{
    menuField: element(by.xpath('//*[@id="telugunews_menu"]/ul/li[2]/a')),

},


PageObjects: function () {

    var pageobjects = this.pageobjects;

    pageobjects.menuField.click();


//inputs from the http://moduscreate.com/protractor-and-page-objects//
}
};

