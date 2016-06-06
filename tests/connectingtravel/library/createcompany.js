(function () {
    var Ctcreatecompany = function () {};

    module.exports = Ctcreatecompany;

    Ctcreatecompany.prototype = {
        createcomp: createcompany,
        viewcompany:viewcompany
    };


    var Menucompany = element(by.css('[ui-sref="company"]'));

    var createbutton = element(by.css('[ui-sref="company.add"]'));

    var companyNameTextBox = element(by.id('companyName'));

    var tagLineTextbox = element(by.id('companyTagLine'));

    var editPicture = element(by.id('avatar-options'));

    var uploadpicture = element(by.css('[ng-click="vm.upload()"]'));


    var picturefileLocation = element(by.css('.modal-content'));


    var companyDescription = element(by.model('vm.company.description'));


    var regsitrationNumber = element(by.model('vm.company.regNumber'));

    var socialwebsites = element(by.model('vm.company.social.website'));


    var twittersite = element(by.model('vm.company.social.twitter'));

    var selectSectors = element(by.model('$select.search'));

    var contactselector = element(by.model('vm.form.contactDetails.service.selected'));

    var addbutton = element(by.buttonText('Add'));


    var editlocation = element(by.buttonText('Edit'));


    function createcompany() {

        Menucompany.click();



        createbutton.click();
        companyNameTextBox.sendKeys('ms ltd');

        tagLineTextbox.sendKeys('tagline');
        editPicture.click();



        uploadpicture.click();


        var form = element(by.css('form'));
        var Eelement = element(by.css('input[type=file]'));
        Eelement.sendKeys('/home/damian/Downloads/horizantalimage.jpg');

        var cropUpdatepicture = element(by.buttonText('Crop Picture'));

        cropUpdatepicture.click();
       var cancelbutton =  element(by.buttonText('Cancel'));

  //      cancelbutton.click();


        companyDescription.sendKeys('summary test test test test test');
        regsitrationNumber.sendKeys('1234567890');

        socialwebsites.sendKeys('www.telugunews4u.com');

        twittersite.sendKeys('www.twitter.com/mahidepuru');

        selectSectors.sendKeys('Accommodation');
        contactselector.sendKeys('Address');

        addbutton.click();
        editlocation.click();


    }


    function viewcompany(){

        Menucompany.click();


        var navigatetoCompany = element(by.model('vm.searchTerm')).sendKeys('Above Consultancy');

        var clickonlisting = element(by.css('[ui-sref= "company.view({companyId: item.id})"]')).click();

        var checkaddEmployee = element(by.xpath('/html/body/div[2]/main/div/div/section/div[2]/div/a'));

        checkaddEmployee.click();

        var closebutton = element(by.css('button.btn.btn-success')).click();



        var checkmangers = element(by.xpath('./html/body/div[2]/main/div/div/section/div[2]/div/ul[2]/li[13]/div/div[2]/div/a')).click();

        var removemanager = element(by.css('[ng-click="removeEmployeeModal(vm.employees, vm.company, employee)"]'));

        var addmanger=element(by.css([]))



        expect(element(by.repeater('employee in vm.employees')).getText());


    }


    /* view company page
     click on edit company
     edit company
     view employee
     view managers
     approve/reject manager
     remove manager
     remove emplopyee

     save changes

     delete company for admin
     */

})();
