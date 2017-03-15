import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';

import { FormControl } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';




// import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

declare let componentHandler: any;

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.6s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    userLogged: boolean;
    firebaseAccount: any = {};
    userName:any = '';
    user: any;
    //userDataLoaded: boolean = false;



    constructor(private dataService: DataService,
                private authService: AuthService) {

    }


    ngOnInit(): void {
        //this.loadUserProfile();
        //console.log(this.userLogged);
        //this.getUser();
        if(this.authService.getLoggedInUser()) {
            console.log(this.authService.getLoggedInUser().uid);
            this.loadUserProfile();
            this.userLogged = true; 
            this.getUser();
        }

    }


    loadUserProfile() {
        // this.firebaseAccount = this.authService.getLoggedInUser();
        // if (this.firebaseAccount) {

        this.getUserName().then((snapshot) => {
            this.userName = snapshot.val();
            //console.log(this.userName);
        })

        //}

    }


    addService() {
        let service = {
            place: "Гай",
            nameservice: "Школа №3",
            service: "Образование",
            phone: "4-44-46"
        }
        

        //this.data.addService(service);
    }

    getUserName() {

            return this.dataService.getUsername(this.authService.getLoggedInUser().uid);
        
    }



    clearData() {

    }

    onChanged(toggle) {
        //console.log(toggle);
        if (toggle == true) {
            this.loadUserProfile();
            this.userLogged = true;
            //this.userDataLoaded = true;
            this.getUser();
        }
        else {
            this.userName = '';
            this.userLogged = false;
            //this.userDataLoaded = false;
        }
        
    }

    getUser() {
        // this.firebaseAccount = this.authService.getLoggedInUser();
        // if (this.firebaseAccount) {
            
        
        let uid = this.authService.getLoggedInUser().uid;

         this.dataService.getUser(uid).then((snapshot) => {
            this.user = snapshot.val();
            console.log(this.user);
            //this.userDataLoaded = true;
        });
       // }
        
    }

    addGroup() {
        let group = {
            groupname: 'worker'
        }
        this.dataService.addGroup(group);
    }

}