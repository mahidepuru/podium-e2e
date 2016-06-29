

describe('travolution Eventpage todo list', function () {

    var LoadMore = element(by.xpath('/html/body/div[1]/main/div/section/section/div/section/section[2]/div[10]/button'));

    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://staging.travolution.com/events');
        browser.driver.manage().window().maximize();

    }

    describe('EventPage checking', function () {
        it('should click the author page', function () {

            var slidercheck = getsliderElement(0)

            slidercheck.click();
            var clickonFirstEvent = element(by.repeater('event in eventsByMonth')).click();



        });
    });


    describe('Righthandwidets checking', function(){
        it ('should check the righthandwidgest elements', function () {

            var clickonMPU = element(by.id('mpu')).click();

            var LeaderBoard = element(by.id('leaderboard')).click();


            var wallpaper = element(by.id('wallpaper'));
            //wall paper clickable when it is on ,otherwise the element is hidden

            //    wallpaper.click();


        });
    });

function getsliderElement(position) {
    var slider = element(by.repeater('(slideKey, slide) in vm.sliderEvents').row(position));
     return slider;

}
});
