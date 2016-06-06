(function () {

    var CtProfilePage = function () {};

    module.exports = CtProfilePage;

    CtProfilePage.prototype = {
        profile: profile
    };

    var firstNameTextBox = element(by.id('userFirstName'));
    var lastNameTextBox = element(by.model('vm.form.model.userEdition.lastname'));
    var tagLineTextBox = element(by.model('vm.form.model.userEdition.tagline'));

    var socialbuttons1 = element(by.model('vm.form.model.userEdition.socialLinkWebsite'));


    var socialbuttons2  = element(by.model('vm.form.model.userEdition.socialLinkTwitter'));

    var socialbuttons3 = element(by.model(''));

    var locationChange = element(by.buttonText('Edit'));

    var countrySelection = element(by.model('vm.currentCountry'));

    var postcode= element(by.id('formPostcode'));

    var findbutton = element(by.buttonText('Find'));


    var selectCheckbox = element(by.id('formLocationOption'));


    var locationConfirmButton = element(by.buttonText('Confirm'));

    var jobstatusclick = element(by.className('.input-group-btn'));

    var jobStatus = element(by.model('vm.form.model.userEditionStatusChanges.jobStatusId'));

    var cickonedit = element(by.css('.input-group-btn'));






    var editProfilebutton = element(by.css('ul.dropdown-menu > li:nth-child(2) > a:nth-child(1)'));
    var summarydescription = element(by.model('vm.form.model.userEdition.summary'));
    var keyskillsTextBox = element(by.model('vm.form.helper.skills.newInput'));

    var addbutton = element(by.buttonText('Add'));
    var removeSkills = element(by.repeater('skill in vm.form.model.userEdition.skills'));

    var addposition = element(by.buttonText('Add Position'));
    var jobtitleTextBox = element(by.id('jobTitleFreetext'));
    //vm.jobEntry.jobTitleFreetext
    var companyNameTextBox = element(by.id('jobCompanyName'));
    var location = element(by.id('jobLocation'));

    var jobdescription = element(by.id('jobDescription'));
    //var checkboxcurrent = element(by.model('vm.updateEndDate()'));
    var addjob = element(by.buttonText('Confirm'));

    var addEductaion= element(by.buttonText('Add Education'));

    var universityTextBox = element(by.id('educationProvider'));

    var courseTextBox = element(by.id('educationCourse'));

    var locationTextBox = element(by.id('educationLocation'));

    var educationDesciption = element(by.id('educationDescription'));

    var educationConfirmButton= element(by.buttonText('Confirm'));






    var cancelButton = element(by.buttonText('Cancel'));


    function profile() {
        editProfilebutton.click();

        firstNameTextBox.clear();
        firstNameTextBox.sendKeys('Mahi');

        lastNameTextBox.clear();

        lastNameTextBox.sendKeys('depuru');

        tagLineTextBox.clear();

        tagLineTextBox.sendKeys('software Tester');

        socialbuttons1.clear();

        socialbuttons1.sendKeys('http://www.connectingtravel.com');

        socialbuttons2.clear();

        socialbuttons2.sendKeys('http://www.facebook.com')

        locationChange.click();

        countrySelection.sendKeys('United Kingdom');

        postcode.sendKeys('ST4 2EH');
        findbutton.click();
        selectCheckbox.click();
        locationConfirmButton.click();


/*
        jobstatusclick.click()

        browser.pause();

        jobStatus.sendKeys('Employed');

        var jobfunction = element(by.id('userJobFunction')).sendKeys('Accounting & Finance');

        var userJobTitleFreetext = element(by.id('userJobTitleFreetext')).sendKeys('Software engineer');


        var userJobCompanyName = element(by.id('userJobCompanyName')).sendKeys('Travelweekly');

        var cancelbutton = element(by.buttonText('Cancel')).click();
*/
        summarydescription.sendKeys('summarydescription');
        keyskillsTextBox.sendKeys('tttt');
        addbutton.click();

        removeSkills.click();
        addposition.click();


        jobtitleTextBox.sendKeys('SoftwareEngineer');

        companyNameTextBox.sendKeys('travelweekly');
        location.sendKeys('London');

        element.all(by.css('.modal-body button')).then(calendarHandler);


       var uibDatePicker = element(by.model('div.uib-datepicker span:contains("Januar")'));
         console.log(typeof uibDatePicker);
        // this.enddate.click();
        jobdescription.sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi sapien, congue et massa quis, eleifend pellentesque dui. Nullam commodo enim sem, eget elementum ex feugiat in.');
        //checkboxcurrent.click();

         addjob.click();


         cancelButton.click();



        addEductaion.click();

        universityTextBox.sendKeys('Staffordshire University');

        courseTextBox.sendKeys('computing');

        locationTextBox.sendKeys('Stafford');
       //date picker will be same format , so change dates incase you need specified ones//


        element.all(by.css('.modal-body button')).then(calendarHandler);


        var uibDatePicker = element(by.model('div.uib-datepicker span:contains("Januar")'));
        console.log(typeof uibDatePicker);
        // this.enddate.click();
        educationDesciption.sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi sapien, congue et massa quis, eleifend pellentesque dui. Nullam commodo enim sem, eget elementum ex feugiat in.');

        educationConfirmButton.click();





       // expect(element(by.binding('appCtrl.errorMessage')).getText()).toEqual('Staffordshire University')
/*
       var editint = element(by.name('vm.userInterestsEditionForm'));

        editint.click();

        var selectIntrests = element(by.css('[ng-click="vm.form.interests.service.selectAllInterests()"]'));

          selectIntrests.click();

        browser.pause();
        var unselectIntrest = element(by.buttonText('Select none'));

        unselectIntrest.click();
//
*/





    }


    function calendarHandler(buttons) {

        var startButton,
            endButton;

        startButton = buttons[0];
        endButton = buttons[1];

        startButton.click();

        var year2001 = element(by.buttonText('2001'));
        year2001.click();

        var monthFebruary = element(by.buttonText('February'));
        monthFebruary.click();

        endButton.click();

        var year2016 = element(by.buttonText('2016'));
        year2016.click();
        monthFebruary.click();



    }



})();