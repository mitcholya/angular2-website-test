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
var data_service_1 = require('../shared/services/data.service');
var auth_service_1 = require('../shared/services/auth.service');
var HomeComponent = (function () {
    //userDataLoaded: boolean = false;
    function HomeComponent(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.firebaseAccount = {};
        this.userName = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.loadUserProfile();
        //console.log(this.userLogged);
        //this.getUser();
        if (this.authService.getLoggedInUser()) {
            console.log(this.authService.getLoggedInUser().uid);
            this.loadUserProfile();
            this.userLogged = true;
            this.getUser();
        }
    };
    HomeComponent.prototype.loadUserProfile = function () {
        // this.firebaseAccount = this.authService.getLoggedInUser();
        // if (this.firebaseAccount) {
        var _this = this;
        this.getUserName().then(function (snapshot) {
            _this.userName = snapshot.val();
            //console.log(this.userName);
        });
        //}
    };
    HomeComponent.prototype.addService = function () {
        var service = {
            place: "Гай",
            nameservice: "Школа №3",
            service: "Образование",
            phone: "4-44-46"
        };
        //this.data.addService(service);
    };
    HomeComponent.prototype.getUserName = function () {
        return this.dataService.getUsername(this.authService.getLoggedInUser().uid);
    };
    HomeComponent.prototype.clearData = function () {
    };
    HomeComponent.prototype.onChanged = function (toggle) {
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
        }
    };
    HomeComponent.prototype.getUser = function () {
        // this.firebaseAccount = this.authService.getLoggedInUser();
        // if (this.firebaseAccount) {
        var _this = this;
        var uid = this.authService.getLoggedInUser().uid;
        this.dataService.getUser(uid).then(function (snapshot) {
            _this.user = snapshot.val();
            console.log(_this.user);
            //this.userDataLoaded = true;
        });
        // }
    };
    HomeComponent.prototype.addGroup = function () {
        var group = {
            groupname: 'worker'
        };
        this.dataService.addGroup(group);
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
        __metadata('design:paramtypes', [data_service_1.DataService, auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map