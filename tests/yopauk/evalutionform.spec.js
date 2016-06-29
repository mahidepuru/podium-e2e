describe('YOPA todo list', function () {


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://qa.yopa.uk/');
    }

    describe('EvaltionForm', function () {
        it('should navigate to navigate to the work flow', function () {



            var Element = driver.find(By.xpath('//*[@id="home"]/section/section[1]/div/div/div/div/div[1]/div/div[3]/div/form[1]/input')).sendKeys('E62DZ');



            var latestNewsElement = driver.element(by.buttonText('submit'));

            latestNewsElement.click();





        })
    })

});



