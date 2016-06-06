
describe('travelweekly Media AppAdminPage', function () {


    var clickonimage = element(by.css('[ui-sref="admin.media.photo.upload"]'));

    var Media =  element(by.css('[ui-sref="admin.media"]'));
    var AlbumSelector = element(by.css('[ui-sref="admin.media.album"]'));

    var SubmitButton = element(by.buttonText('Sign in'));

    var deletebutton = element(by.css('i.fa.fa-close'));


    var videonaviselect = element(by.css('[ui-sref="admin.media.video"]'));


    var deleteconformation = element(by.css('[ng-click ="ok()"]'));

    var editvideobutton =element(by.css('[ng-click="vm.deletePhoto($index)"]'));

    var VideoTitle = element(by.model('vm.video.title'));

    var Editupdatebutton = element(by.css('a.btn.btn-default'));


    var titleofthepicture = element(by.model('vm.media.title'));


    var saveButton =  element(by.css('[ng-click = "vm.saveMedia()"]'));

    var SaveAlbumButton = element(by.buttonText('Create album'));

    var featuredslotLocator = element(by.model('vm.formAlbumSet.mediaFeatured'));

// These are the re usable elements //


    beforeEach(beforeEachSetup);

    function beforeEachSetup() {
        browser.get('http://staging.travolution.com/app/admin/login');
        browser.driver.manage().window().maximize();

    }

     describe('Login', function () {
     it('should have 3 elements loaded by default', function () {


     var UsernameElement = element(by.model('vm.login.email')).sendKeys('admin@getpodium.co.uk');

     var PasswordElement = element(by.model('vm.login.password')).sendKeys('test');
     SubmitButton .click();


     Media.click();



     clickonimage.click();


     var form = element(by.css('form'));
     var Eelement = element(by.css('input[type=file]'));
     Eelement.sendKeys('/home/damian/Downloads/horizantalimage.jpg');



     // var updateImage = element(by.xpath('/html/body/div[1]/div/main/div/div[2]/div[1]/form/div[2]/input')).sendKeys('/home/damian/Downloads/horizantalimage.jpg');

     var clickupload = element(by.css('[ng-click ="vm.uploadPhoto()"]')).click();



     var titleofthepicture = element(by.model('vm.uploaded[$index].title')).clear();
     var titleofthepicture = element(by.model('vm.uploaded[$index].title')).sendKeys('change the title of  the picture');

     var updateCaption = element(by.model('vm.uploaded[$index].caption')).sendKeys('caption title');

     var updatebuttonforImages = element(by.css('[ng-click ="vm.savePhoto($index)"]')).click();


     });
     });


    describe('Addvideo', function(){
        it ('should update the video and check the elements',function(){

/*
            var UsernameElement = element(by.model('vm.login.email')).sendKeys('admin@getpodium.co.uk');

            var PasswordElement = element(by.model('vm.login.password')).sendKeys('test');

            SubmitButton .click();

*/

            Media.click();

            var videonaviselect = element(by.css('[ui-sref="admin.media.video"]')).click();

            var Videobutton = element(by.css('[ui-sref="admin.media.video.create"]')).click();

            var selectvideoProvider = element(by.model('vm.video.provider')).sendKeys('youtube');


            var videoID = element(by.model('vm.video.videoId')).sendKeys('QgxvDORKzec');

            var VideoTitle = element(by.model('vm.video.title')).sendKeys('Title of the video');

            var videoDescription = element(by.model('vm.video.caption')).sendKeys('Video description limit is 255 char');

            //   var updatebutton = element(by.css('[ng-click ="vm.saveVideo(videoForm)"]'));

            //var checktext = element(by.binding('vm.savedSuccessfully'));

            //expect(checktext.getText()).toEqual('Video successfully created.');



        });

    });




     describe('Delete Images and Videos', function () {
     it ('should update imageinfo and delete image aswell',function(){



     Media.click();

     Editupdatebutton.click();


     titleofthepicture.clear();
     titleofthepicture.sendKeys('change the title of  the picture');
     saveButton.click();
     Media.click();
     deletebutton.click();
     deleteconformation.click();
     Media.click();
     videonaviselect.click();
     Editupdatebutton.click();
     VideoTitle.clear();
     VideoTitle.sendKeys('Title of the video');
     var updatebutton = element(by.css('[ng-click ="vm.saveVideo(videoForm)"]')).click();
     Media.click()
     videonaviselect.click();
     deletebutton.click();
     deleteconformation.click();

     //The above test case works on edit image, delete image, edit video  and delete video //



     });



     });





     describe('createAlbums ', function () {
     it ('should update imageinfo and delete image aswell',function(){


     Media.click();

     AlbumSelector.click();

     var CreateAlbumButton = element(by.css('[ui-sref= "admin.media.album.create"]')).click();




     var AlbumnameTextbox =  element(by.id('name'));

     AlbumnameTextbox.sendKeys("Test");


     var SelectTypeofalbum = element(by.css('select.form-control')).sendKeys('Photo Album');


     // Here i should find the element //

     var visibleCheckbox = element(by.model('vm.album.isPublic')).click();





     var CheckBox =element(by.css('[ng-click= "vm.togglePhotoSelection(media)"]')).click();

     SaveAlbumButton.click();
     AlbumSelector.click();
     var FeaturedAlbumButton = element(by.css('[ui-sref="admin.media.album.featured"]')).click();


     featuredslotLocator.sendKeys('p1');

     featuredslotLocator.sendKeys('p1');


     featuredslotLocator.sendKeys('p1');


     var publishAlbums = element(by.css('[ng-click="vm.publish(albumFeaturedSet)"]'));
         publishAlbums.click();



     //go to albums
     //click create album
     //create photo album
     //set featured set of albums





     });

     });


    describe('events creating from the Admin panel', function () {
        it('should update imageinfo and delete image aswell', function () {


            var EventsButton = element(by.css('[ui-sref="admin.events"]')).click();


            var CreateEventButton = element(by.css('[ui-sref="admin.events.create"]')).click();



            var TitleTextBox = element(by.model('vm.event.title')).sendKeys('Event Title');

            var  DescriptionTextBox = element(by.model('vm.event.description')).sendKeys('Event Description');

            //var startDate = element(by.model('')).sendKeys()
            //Start and end date picker not found should need to update //

            var LocationTextBox = element(by.model('vm.event.location')).sendKeys('London  eye ');

            //var EventWebLink = element(by,model('vm.event.link')).sendKeys('www.travolution.com');


            var EmailTextbox = element(by.model('vm.event.phone')).sendKeys('098976543312');

            var PhonenumberTextbox = element(by.model('vm.event.submittedBy')).sendKeys('rdepuru@gmail.com');

            var  checkboxsatus =  element(by.model('vm.event.isLive')).click();

            var savebutton = element(by.buttonText('Create event')).click();






        });

    });




    describe('authors elements checking', function(){
        it('should check the texbox and all elements', function () {

            var clickOnAuthorTab = element(by.css('[ui-sref="admin.authors"]')).click();


            var editbutton = element(by.css('[ui-sref="admin.authors.edit({id: author.easId})"]')).click();


            var editsociallinks = element(by.model('vm.author.socialLinkFacebook')).sendKeys('Test');

            var GoogleTextBox = element(by.model('vm.author.socialLinkGoogle')).click();

            var TwitterTextBox = element(by.model('vm.author.socialLinkTwitter')).click();


            var Checkboxchecking = element(by.model('vm.author.isFeatured')).click();


            var autorupdateBUtton = element(by.buttonText('Update author')).click();



        })
    })




});

