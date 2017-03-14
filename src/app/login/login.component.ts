import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

// import { SignupPage } from '../signup/signup';
import { UserCredentials } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service';
import { EmailValidator } from '../shared/validators/email.validators';

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
    userName: string = '';
    @Input() userLogged: boolean;
    @Output() onChanged = new EventEmitter<boolean>(); 

    constructor(
        public fb: FormBuilder,
        public dataService: DataService,
        public authService: AuthService,
        public router: Router) { }

    ngOnInit() {
        this.loginFirebaseAccountForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
        });

        this.email = this.loginFirebaseAccountForm.controls['email'];
        this.password = this.loginFirebaseAccountForm.controls['password'];
        //console.log(this.userLogged);
    }

    onSubmit(signInForm: any): void {
        //var self = this;
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

            //console.log(user);
            this.authService.signInUser(user.email, user.password)
                .then((result) => {
                    // self.nav.setRoot(TabsPage);
                    //console.log('Привет');
                    //this.userName = 'Привет!!!';
                    //this.getUserName();
                    this.change(true);
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
        //console.log(this.userLogged);
        this.router.navigate(['/signup']);
    }

    signOut() {
        this.userName = '';
        this.change(false);
        return this.authService.signOut();
    }

    // getUserName() {
    //     let uid = this.authService.getLoggedInUser().uid;
    //     this.dataService.getUsername(uid).then((snapshot) => {
    //         this.userName = snapshot.val();
    //         //console.log(snapshot.val());
    //     });
    // }
    change(toggle) {
        this.onChanged.emit(toggle);
        this.userLogged = toggle;
        //this.userLogged = false;
    }
}