

var width = 750;
var height = 1334;


fdescribe('YOPA todo list', function () {




    beforeEach(beforeEachSetup);

    function beforeEachSetup() {

        browser.ignoreSynchronization = true;

        browser.get('http://telugunews4u.com/');
        browser.driver.manage().window().setSize(width, height);

    }

    describe('EvaltionForm', function () {
        it('should navigate to navigate to the work flow', function () {


            var Memu = element(by.xpath('//*[@id="telugunews_top_panel"]/button')).click();

//browser.pause();

            //var eee = element(by.id('telugunews_menu')).click();

           var Element = element(by.xpath('//*[@id="telugunews_menu"]/ul/li[2]/a'));


                Element.click();
                //sendKeys('E62DZ');

//              Memu.click();

  //          var subMitButton = element(by.xpath('//*[@id="telugunews_menu"]/ul/li[3]/a')).click();


        })
    })

});


//protractor works on non angular applications as well


