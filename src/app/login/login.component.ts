import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

// import { SignupPage } from '../signup/signup';
import { UserCredentials } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    loginFirebaseAccountForm: FormGroup;
    email: AbstractControl;
    password: AbstractControl;

    constructor(
        public fb: FormBuilder,
        public dataService: DataService,
        public authService: AuthService) { }

    ngOnInit() {
        this.loginFirebaseAccountForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        });

        this.email = this.loginFirebaseAccountForm.controls['email'];
        this.password = this.loginFirebaseAccountForm.controls['password'];
    }

    onSubmit(signInForm: any): void {
        var self = this;
        if (this.loginFirebaseAccountForm.valid) {

            // let loader = this.loadingCtrl.create({
            //     content: 'Signing in firebase..',
            //     dismissOnPageChange: true
            // });

            // loader.present();

            let user: UserCredentials = {
                email: signInForm.email,
                password: signInForm.password
            };

            console.log(user);
            this.authService.signInUser(user.email, user.password)
                .then(function (result) {
                    // self.nav.setRoot(TabsPage);
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
    }

    register() {
        // this.nav.push(SignupPage);
    }
}