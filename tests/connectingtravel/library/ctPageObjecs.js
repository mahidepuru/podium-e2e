var ctPaeObjecs = function() {


    this.userInput = element(by.model('login.email'));
    this.passwordInput = element(by.model('login.password'));
    this.loginButton = element(by.id('btn-signin'));


    this.navigation = element(by.id('header-menu-profile'));
}
/*

this. verifyListItems = function(listItemsExpected,listActual, offset){
    var i;
    var expectedItemsString;
    for (i=0;i<listItemsExpected.length; i++)

     expectedItemsString = expectedItemsString+ listItemsExpected[i];
    this.waitForElement(null,browser.time(), listActual, true);

    list
    */



module.exports = ctPaeObjecs();