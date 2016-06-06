
describe('travel weekly homepage todo list', function () {
    var eventbutton = element(by.className('btn-primary'))


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://travelweekly.co.uk/events');

    }

    describe('Competition section', function () {
        it('should have 3 elements loaded by default', function () {


            eventbutton.click();

           // browser.pause();

            var eventtitile  =  element(by.model('newEventForm.title')).sendKeys(1234);


            //browser.debugger();

            var eventinput = element(by.model('newEventForm.description')).sendKeys(1234);

            var EventDate = element(by.model('newEventForm.startDate')).click();

            var selectdate = element(by.css('[ng-click="select(dt.date)"]')).click();

            var datepicker = element(by.model('newEventForm.endDate')).click();

            var enddate = element(by.css('[ng-click="select(dt.date)"]')).click();

            var Eventlocation = element(by.model('newEventForm.location')).sendKeys('ssss');

            var webLink = element(by.model('newEventForm.link')).sendKeys(123333333);

            var Phonenumber = element(by.model('newEventForm.phone')).sendKeys('1111111111111111111111111');


             var submitafter = element(by.css('[ng-click= "save(submitEventForm)"]')).click();


        // var calenderclick = element(by.className('[ui-sref="events.calendar({calendar: 'calendar'})"]')).click();

        var viewevent = element(by.className('fc-content')).click();


        var clickslider = element(by.xpath('/html/body/div[1]/main/div/section/section/div[1]/section/div/div/div/div[1]/article/div/header')).click();





            });
        });





    });





