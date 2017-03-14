import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { ValidationResult } from '../interfaces';

export class PasswordValidator {

    public static isEqual(
       
        password: string, retry_password: string
        ) {
        //var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        //let valid = emailReg.test(control.value);

        //let valid 
        return ( group: FormGroup) => {
        let passwordInput = group.controls[password],
            retry_passwordInput = group.controls[retry_password];                                   
        if (passwordInput.value !== retry_passwordInput.value) {
            return retry_passwordInput.setErrors({ mismatchPassword: true });
        }
        }

        //return null;
    }
}   