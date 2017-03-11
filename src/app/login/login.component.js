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
var forms_1 = require('@angular/forms');
var data_service_1 = require('../shared/services/data.service');
var auth_service_1 = require('../shared/services/auth.service');
var email_validators_1 = require('../shared/validators/email.validators');
var LoginComponent = (function () {
    function LoginComponent(fb, dataService, authService) {
        this.fb = fb;
        this.dataService = dataService;
        this.authService = authService;
        this.userName = '';
        this.userLogged = false;
        this.onChanged = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFirebaseAccountForm = this.fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, email_validators_1.EmailValidator.isValid])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
        this.email = this.loginFirebaseAccountForm.controls['email'];
        this.password = this.loginFirebaseAccountForm.controls['password'];
        //console.log(this.userLogged);
    };
    LoginComponent.prototype.onSubmit = function (signInForm) {
        var _this = this;
        //var self = this;
        if (this.loginFirebaseAccountForm.valid) {
            // let loader = this.loadingCtrl.create({
            //     content: 'Signing in firebase..',
            //     dismissOnPageChange: true
            // });
            // loader.present();
            var user = {
                email: signInForm.email,
                password: signInForm.password
            };
            //console.log(user);
            this.authService.signInUser(user.email, user.password)
                .then(function (result) {
                // self.nav.setRoot(TabsPage);
                //console.log('Привет');
                //this.userName = 'Привет!!!';
                //this.getUserName();
                _this.change(true);
                _this.userLogged = true;
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // loader.dismiss().then(() => {
                //     let toast = self.toastCtrl.create({
                //         message: errorMessage,
                //         duration: 4000,
                //         position: 'top'
                //     });
                //     toast.present();
                // });
            });
        }
    };
    LoginComponent.prototype.register = function () {
        // this.nav.push(SignupPage);
        //console.log(this.userLogged);
    };
    LoginComponent.prototype.signOut = function () {
        this.userName = '';
        this.change(false);
        return this.authService.signOut();
    };
    // getUserName() {
    //     let uid = this.authService.getLoggedInUser().uid;
    //     this.dataService.getUsername(uid).then((snapshot) => {
    //         this.userName = snapshot.val();
    //         //console.log(snapshot.val());
    //     });
    // }
    LoginComponent.prototype.change = function (toggle) {
        this.onChanged.emit(toggle);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LoginComponent.prototype, "userLogged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "onChanged", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, data_service_1.DataService, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map