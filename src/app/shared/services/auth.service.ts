import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserCredentials } from '../interfaces';
import { Router } from '@angular/router';
declare var firebase: any;


@Injectable()
export class AuthService {

    usersRef: any = firebase.database().ref('users');

    constructor(private router: Router) { }

    registerUser(user: UserCredentials) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification()
                    .then(() => {
                        console.log('Verification Email Sent');
                        this.router.navigate(['/email-verify']);
                    }, (error) => {
                        console.log('An error Occured:  ' + error.message)
                    });

                firebase.auth().signOut()
                    .then(() => {
                        console.log('SignOut');
                    }, (error) => {
                        console.log(error);
                    });
            }, (error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    signInUser(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signOut() {
        return firebase.auth().signOut();
    }

    addUser(username: string, uid: string) {
        this.usersRef.child(uid).update({
            username: username
        });
    }

    getLoggedInUser() {
        return firebase.auth().currentUser;
    }

    onAuthStateChanged(callback) {
        return firebase.auth().onAuthStateChanged(callback);
    }

}
