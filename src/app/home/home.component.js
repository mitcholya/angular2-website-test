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
var HomeComponent = (function () {
    // searchTerm: string = '';
    // searchControl: FormControl;
    // items: any;
    //heroes: Observable<Hero[]>;
    //private searchTerms = new Subject<string>();
    function HomeComponent() {
        // console.log(this.data.getPlaces().then((snapshot) => {
        //     console.log(snapshot.val());
        // }));
        // console.log(this.data.searchService('Образование').then((snapshot) => {
        //     console.log(snapshot.val());
        // }));
        // this.searchControl = new FormControl();
    }
    // search(term: string): void {
    // // Push a search term into the observable stream.
    // this.searchTerms.next(term);
    // }
    HomeComponent.prototype.ngOnInit = function () {
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
        //         console.log(`Error in component ... ${error}`);
        //         return Observable.of<IService[]>([]);
        //     });
        // this.setFilteredItems();
        // this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        //  this.setFilteredItems();
        // });
    };
    // setFilteredItems() {
    //     this.items = this.dataSearch();
    // }
    HomeComponent.prototype.addService = function () {
        var service = {
            place: "Гай",
            nameservice: "Школа №3",
            service: "Образование",
            phone: "4-44-46"
        };
        //this.data.addService(service);
    };
    // dataSearch(){
    //     this.data.getServices().then((snapshot) => {
    //             //console.log(snapshot.val());
    //            this.dataObservable =  this.itemsService.reversedItems<IService>(this.mappingService.getServices(snapshot))
    //         });
    //     return this.dataObservable;
    // }
    HomeComponent.prototype.clearData = function () {
        // if ( this.queryText.trim().length == 0) {
        //     this.services = [];
        // }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.6s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map