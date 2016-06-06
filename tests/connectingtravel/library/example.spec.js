(function() {
    'use strict';
    describe('Auth service', function() {
        var authService, store, $httpBackend, CONSTANTS, $rootScope, toaster, $scope, $q, $state, authInterceptor, jsonMock,
            loginResponse, userInfoResponse, facebookResponse, stateWithNotRequiredLogin, stateWithRequiredLogin,
            currentUser, credentials, user,
            facebookLoginUrl, userInfoUrl, defaultLoginUrl;
        beforeEach(module('dziura'));
        beforeEach(module('dziura.mocks'));
        beforeEach(inject(function(_authService_, _store_, _$httpBackend_, _CONSTANTS_,
                                   _$rootScope_, _toaster_, _$q_, _$state_, _authInterceptor_, _jsonMock_) {
            authService = _authService_;
            store = _store_;
            $httpBackend = _$httpBackend_;
            CONSTANTS = _CONSTANTS_;
            toaster = _toaster_;
            $q = _$q_;
            $rootScope = _$rootScope_;
            $state = _$state_;
            authInterceptor = _authInterceptor_;
            jsonMock = _jsonMock_;
            $scope = $rootScope.$new();
            facebookLoginUrl = CONSTANTS.BASE_URL + '/api/user/login';
            userInfoUrl = CONSTANTS.BASE_URL + '/api/user/me';
            defaultLoginUrl = CONSTANTS.BASE_URL + CONSTANTS.OAUTH.TOKEN_URL;
            loginResponse = jsonMock.getJson("auth/loginResponse.json");
            userInfoResponse = jsonMock.getJson("auth/userInfoResponse.json");
            facebookResponse = jsonMock.getJson("auth/facebookResponse.json");
            currentUser = angular.extend({}, userInfoResponse, loginResponse);
            stateWithNotRequiredLogin = jsonMock.getJson("auth/stateWithNotRequiredLogin.json");
            stateWithRequiredLogin = jsonMock.getJson("auth/stateWithRequiredLogin.json");
            user = jsonMock.getJson('auth/user.json');
            credentials = jsonMock.getJson("auth/credentials.json");
            spyOn($rootScope, '$broadcast').and.callThrough();
        }));
        it('should return null user from local storage', function() {
            store.remove('currentUser');
            var user = authService.getCurrentUser();
            expect(user).toBe(null);
        });
        it('should return valid user from local storage', function() {
            store.set('currentUser', currentUser);
            var user = authService.getCurrentUser();
            expect(angular.equals(user, currentUser)).toBe(true);
        });
        it('should remove user from local storage and broadcast it after logout', function() {
            store.set('currentUser', currentUser);
            var user = authService.getCurrentUser();
            expect(angular.equals(user, currentUser)).toBe(true);
            authService.logout();
            var userAfterLogout = authService.getCurrentUser();
            expect(userAfterLogout).toBe(null);
            expect($rootScope.$broadcast).toHaveBeenCalledWith('user:LoggedOut');
        });
        it('should return true if user is authenticated', function() {
            store.set('currentUser', currentUser);
            expect(authService.isAuthenticated()).toBe(true);
        });
        it('should return false if user is not authenticated', function() {
            store.remove('currentUser');
            expect(authService.isAuthenticated()).toBe(false);
        });
        it('should broadcast event "user:Registered" after success register user', function() {
            var url = CONSTANTS.BASE_URL + '/api/user/register';
            var params = {
                client_id :CONSTANTS.OAUTH.CLIENT_ID,
                client_secret : CONSTANTS.OAUTH.CLIENT_SECRET
            };
            angular.extend(params, user);
            $httpBackend.when('POST', url , params)
                .respond(200);
            authService.register(user);
            $httpBackend.flush();
            expect($rootScope.$broadcast).toHaveBeenCalledWith('user:Registered');
        });
        it('should return true when login is not required and user is not logged', function() {
            store.remove('currentUser');
            expect(authService.isUserAllowed(stateWithNotRequiredLogin)).toBe(true);
        });
        it('should return false when login is required and user is not logged', function() {
            store.remove('currentUser');
            expect(authService.isUserAllowed(stateWithRequiredLogin)).toBe(false);
        });
        it('should return false when login is required and user is logged', function() {
            store.set('currentUser', currentUser);
            expect(authService.isUserAllowed(stateWithRequiredLogin)).toBe(true);
        });
        it('should return false when login is required and user is logged', function() {
            store.set('currentUser', currentUser);
            expect(authService.isUserAllowed(stateWithNotRequiredLogin)).toBe(true);
        });
        it('should login user(default login)', function() {
            $httpBackend.when('POST', defaultLoginUrl)
                .respond(200, loginResponse);
            $httpBackend.when('GET', userInfoUrl)
                .respond(200, userInfoResponse);
            authService.login(CONSTANTS.OAUTH.PROVIDERS.DEFAULT, credentials);
            $httpBackend.flush();
            var currentUser = store.get('currentUser');
            var expectCurrentUser = angular.extend({}, userInfoResponse, loginResponse);
            expect(angular.equals(currentUser, expectCurrentUser)).toBe(true);
            expect($rootScope.$broadcast).toHaveBeenCalledWith('user:LoggedIn');
        });
        it('should login user(facebook login)', function() {
            spyOn(hello, 'login').and.callFake(function() {
                var deferred = $q.defer();
                deferred.resolve(facebookResponse);
                return deferred.promise;
            });
            $httpBackend.when('POST', facebookLoginUrl)
                .respond(200, loginResponse);
            $httpBackend.when('GET', userInfoUrl)
                .respond(200, userInfoResponse);
            authService.login(CONSTANTS.OAUTH.PROVIDERS.FACEBOOK);
            $httpBackend.flush();
            var currentUser = store.get('currentUser');
            var expectCurrentUser = angular.extend({}, userInfoResponse, loginResponse);
            expect(angular.equals(currentUser, expectCurrentUser)).toBe(true);
            expect($rootScope.$broadcast).toHaveBeenCalledWith('user:LoggedIn');
        });
        it('should login user(refresh token)', function() {
            $httpBackend.when('POST', defaultLoginUrl)
                .respond(200, loginResponse);
            $httpBackend.when('GET', userInfoUrl)
                .respond(200, userInfoResponse);
            authService.login(CONSTANTS.OAUTH.PROVIDERS.REFRESH_TOKEN);
            $httpBackend.flush();
            var currentUser = store.get('currentUser');
            var expectCurrentUser = angular.extend({}, userInfoResponse, loginResponse);
            expect(angular.equals(currentUser, expectCurrentUser)).toBe(true);
            expect($rootScope.$broadcast).toHaveBeenCalledWith('user:LoggedIn');
        });
        it('should redirect user to login state after failed refresh token', function() {
            spyOn($state, 'go');
            store.remove('currentUser');
            authService.login(CONSTANTS.OAUTH.PROVIDERS.REFRESH_TOKEN);
            var currentUser = store.get('currentUser');
            expect($state.go).toHaveBeenCalledWith('home.login', {message: 'You have to log in to process'});
            expect(currentUser).toBe(null);
        });
    });
})();/**
 * Created by damian on 21/04/16.
 */
