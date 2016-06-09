fdescribe('beam TV validation homepage todo list', function () {
    'use strict';

    var playVideo = element(by.xpath('//*[@id="grid-view"]/div/div[1]/div/div[1]/div/div/div/div[2]/a/span'));

    var maximizeScreen = element(by.xpath('//*[@id="vplay"]/div[5]/ul[3]/li[1]/div[2]'));

    var minimizeScreen = element(by.xpath('//*[@id="vplay"]/div[5]/ul[3]/li[1]/div[1]'))

    var closeButton = element(by.xpath('//*[@id="videoPlayerModal"]/button/span'));



    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://filemailer.beam.tv/DTqcgSdQNY/NJPSDwbNGk/YWRhbWRAYmVhbS50dg==');
        browser.driver.manage().window().maximize();

    }

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {
            expect(browser.getTitle()).toEqual('Adtext, FileMailer Test - J107066');
        });
    });

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {


            playVideo.click();

            maximizeScreen.click();
            minimizeScreen.click();
            closeButton.click();

            //browser.pause();
        });
    });

    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {



            var downloadVideo = element(by.xpath('//*[@id="grid-view"]/div/div[2]/div/div[1]/div/div/div/div[1]/a/span')).click();

});
    });
    describe('Meta tags', function () {
        it('Page should have proper meta title', function () {



            var listView = element(by.xpath('//*[@id="control1"]/a/span')).click();


var showMeatData = element(by.xpath('//*[@id="control2"]/a/span')).click();
            var faq = element(by.xpath('//*[@id="control3"]/a/span')).click();

            browser.pause();

            var selectcheckBoxes = element(by.xpath('//*[@id="all-Source"]/span')).click();

            var selectAllinVideo = element(by.xpath('//*[@id="file-127177140"]/div/div[1]/div/div[1]/span')).click();





            var SelctSecondVideo = element(by.xpath('//*[@id="file-127177136"]/div/div[1]/div/div[1]')).click();

            var thirdvideo = element(by.xpath('//*[@id="file-127177132"]/div/div[1]/div/div[1]/span')).click();


            var closeBUtton2 = element(by.xpath('//*[@id="orderTranscodeModal"]/button/span')).click();








        });
    });



});
