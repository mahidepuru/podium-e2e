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

        ,
        /*
         {
         browserName: 'phantomjs',
         }
         */
    ],
    onprepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(6000);
    },
    cucumberOpts: {
        require: 'features/step_definations/*_steps.js',
        format: 'pretty'
    }
,

    jasmineNodeOpts: {
        showColors: true
    }
};
