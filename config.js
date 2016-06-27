exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: [
        'tests/**/*.spec.js'
    ],
    multiCapabilities: [
        {
            browserName: 'chrome'
        }
        /*,
         {
         browserName: 'firefox'
         }*/
    ],
    /*onprepare:function(){
    browser.driver.manage().timeouts().implicitlyWait(6000);
},
*/
    jasmineNodeOpts: {
        showColors: true
    }
};
