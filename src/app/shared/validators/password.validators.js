"use strict";
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.isEqual = function (password, retry_password) {
        //var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //let valid = emailReg.test(control.value);
        //let valid 
        return function (group) {
            var passwordInput = group.controls[password], retry_passwordInput = group.controls[retry_password];
            if (passwordInput.value !== retry_passwordInput.value) {
                return retry_passwordInput.setErrors({ mismatchPassword: true });
            }
        };
        //return null;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=password.validators.js.map