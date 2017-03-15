import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { UserCredentials } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service';
import { EmailValidator } from '../shared/validators/email.validators';
import { PasswordValidator } from '../shared/validators/password.validators';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})

export class SignUpComponent {

    email: AbstractControl;
    password: AbstractControl;
    retry_password: AbstractControl;
    signUpFirebaseAccountForm: FormGroup;

    constructor(
        public fb: FormBuilder,
        public dataService: DataService,
        public authService: AuthService
                ) { }

    ngOnInit() {
        this.signUpFirebaseAccountForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'retry_password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        }, { validator: PasswordValidator.isEqual('password', 'retry_password') });

        this.email = this.signUpFirebaseAccountForm.controls['email'];
        this.password = this.signUpFirebaseAccountForm.controls['password'];
        this.retry_password = this.signUpFirebaseAccountForm.controls['retry_password'];
        //console.log(this.userLogged);
    }    

    onSubmit(signUpForm: any): void {
        if (this.signUpFirebaseAccountForm.valid) {
            let user: UserCredentials = {
                email: signUpForm.email,
                password: signUpForm.password
            };

            this.authService.registerUser(user);
                // .then((success) => {
                //     console.log(success)
                //     console.log('User created');
                //     console.log(this.authService.getLoggedInUser());
                //     //this.authService.signOut();
                //     this.addUser();
                    
                // })
                // .catch(() => {
                //     console.log('Error user created');
                // })

        }
    } 

    addUser() {
        let user = this.authService.getLoggedInUser().uid;

        let username = 'Test GMAIL';

        this.authService.addUser(username, user);
    }      
}