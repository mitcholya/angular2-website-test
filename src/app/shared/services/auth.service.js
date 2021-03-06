"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.usersRef = firebase.database().ref('users');
    }
    AuthService.prototype.registerUser = function (user) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(function () {
            firebase.auth().currentUser.sendEmailVerification()
                .then(function () {
                console.log('Verification Email Sent');
                _this.router.navigate(['/email-verify']);
            }, function (error) {
                console.log('An error Occured:  ' + error.message);
            });
            firebase.auth().signOut()
                .then(function () {
                console.log('SignOut');
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error.code);
            console.log(error.message);
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signOut = function () {
        return firebase.auth().signOut();
    };
    AuthService.prototype.addUser = function (username, uid) {
        this.usersRef.child(uid).update({
            username: username
        });
    };
    AuthService.prototype.getLoggedInUser = function () {
        return firebase.auth().currentUser;
    };
    AuthService.prototype.onAuthStateChanged = function (callback) {
        return firebase.auth().onAuthStateChanged(callback);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map