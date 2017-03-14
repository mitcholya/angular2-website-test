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
var password_validators_1 = require('../shared/validators/password.validators');
var SignUpComponent = (function () {
    function SignUpComponent(fb, dataService, authService) {
        this.fb = fb;
        this.dataService = dataService;
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.signUpFirebaseAccountForm = this.fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, email_validators_1.EmailValidator.isValid])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            'retry_password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        }, { validator: password_validators_1.PasswordValidator.isEqual('password', 'retry_password') });
        this.email = this.signUpFirebaseAccountForm.controls['email'];
        this.password = this.signUpFirebaseAccountForm.controls['password'];
        this.retry_password = this.signUpFirebaseAccountForm.controls['retry_password'];
        //console.log(this.userLogged);
    };
    SignUpComponent.prototype.onSubmit = function (signUpForm) {
        var _this = this;
        if (this.signUpFirebaseAccountForm.valid) {
            var user = {
                email: signUpForm.email,
                password: signUpForm.password
            };
            this.authService.registerUser(user)
                .then(function () {
                console.log('User created');
                console.log(_this.authService.getLoggedInUser());
            })
                .catch(function () {
                console.log('Error user created');
            });
        }
    };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, data_service_1.DataService, auth_service_1.AuthService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map