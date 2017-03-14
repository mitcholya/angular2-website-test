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
    userDataLoaded: boolean = false;
    //userLogged: boolean;

    // searchTerm: string = '';
    // searchControl: FormControl;
    // items: any;


    //heroes: Observable<Hero[]>;
    //private searchTerms = new Subject<string>();



    constructor(private dataService: DataService,
                private authService: AuthService) {
        // //console.log(this.data.getPlaces().then((snapshot) => {
        //     //console.log(snapshot.val());
        // }));
        // //console.log(this.data.searchService('Образование').then((snapshot) => {
        //     //console.log(snapshot.val());
        // }));

        // this.searchControl = new FormControl();
    }

    // search(term: string): void {
    // // Push a search term into the observable stream.
    // this.searchTerms.next(term);
    // }

    ngOnInit(): void {
        // this.services = this.searchTerms
        //     .debounceTime(300)        // wait for 300ms pause in events
        //     .distinctUntilChanged()   // ignore if next search term is same as previous
        //     .switchMap(term => term   // switch to new observable each time
        //         // return the http search observable
        //         ? this.dataSearch(term)
        //         // or the observable of empty heroes if no search term
        //         : Observable.of<IService[]>([]))
        //     .catch(error => {
        //         // TODO: real error handling
        //         //console.log(`Error in component ... ${error}`);
        //         return Observable.of<IService[]>([]);
        //     });

        // this.setFilteredItems();
 
        // this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
        //  this.setFilteredItems();
 
        // });
        this.loadUserProfile();
        //console.log(this.userLogged);
        this.getUser();

    }

    // ngOnChanges(changes) {
    // // Called right after our bindings have been checked but only
    // // if one of our bindings has changed.
    // //
    // // changes is an object of the format:
    // // {
    // //   'prop': PropertyUpdate
    // // }
    // this.loadUserProfile();
    // }

    // ngDoCheck() {
    // // Custom change detection
    // this.loadUserProfile();
    // }

    loadUserProfile() {
        this.firebaseAccount = this.authService.getLoggedInUser();
        if (this.firebaseAccount) {
        //this.userDataLoaded = false;

        this.getUserName().then((snapshot) => {
            this.userName = snapshot.val();
            //console.log(this.userName);
        })

        //this.userDataLoaded = true;
        }

    }

    // setFilteredItems() {
 
    //     this.items = this.dataSearch();
 
    // }

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

        //console.log(this.firebaseAccount);
        //if (this.firebaseAccount) {
            return this.dataService.getUsername(this.authService.getLoggedInUser().uid);
        //}
        
    }

    // dataSearch(){
    //     this.data.getServices().then((snapshot) => {
    //             ////console.log(snapshot.val());
    //            this.dataObservable =  this.itemsService.reversedItems<IService>(this.mappingService.getServices(snapshot))
    //         });

    //     return this.dataObservable;
    // }



    clearData() {
        // if ( this.queryText.trim().length == 0) {
        //     this.services = [];
        // }
    }

    onChanged(toggle) {
        //console.log(toggle);
        if (toggle == true) {
            this.loadUserProfile();
            this.userLogged = true;
            this.userDataLoaded = true;
        }
        else {
            this.userName = 'Гость';
            this.userLogged = false;
            this.userDataLoaded = false;
        }
        
    }

    getUser() {
        this.firebaseAccount = this.authService.getLoggedInUser();
        if (this.firebaseAccount) {
            
        
        let uid = this.authService.getLoggedInUser().uid;

         this.dataService.getUser(uid).then((snapshot) => {
            this.user = snapshot.val();
            console.log(this.user);
            this.userDataLoaded = true;
        });
        }
        
    }

    addGroup() {
        let group = {
            groupname: 'worker'
        }
        this.dataService.addGroup(group);
    }

}