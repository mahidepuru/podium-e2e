var adconloginactions = function() {

    this.loginadcon = function() {

        adconPageObjects.EmailTextbox.sendKeys('auto_user04@coreuidev.net');
        adconPageObject.NextButton.click();
        adconPageObjects.SelectDomain.sendKeys('cloud');
        adconPageObjects.PasswordTextbox.sendKeys('M1m3c45t');
        adconPageObjects.LoginButton.click();
    }
}
module.exports = AdconPageObject;

/*var adconloginactions = function() {

 this.loginadcon = function() {

 adconPageObjects.EmailTextbox.sendKeys('auto_user04@coreuidev.net');
 adconPageObject.NextButton.click();
 adconPageObjects.SelectDomain.sendKeys('cloud');
 adconPageObjects.PasswordTextbox.sendKeys('M1m3c45t');
 adconPageObjects.LoginButton.click();
 }
 }
 module.exports = AdconPageObject;*/