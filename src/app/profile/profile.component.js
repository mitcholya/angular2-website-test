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
var router_1 = require('@angular/router');
var auth_service_1 = require('../shared/services/auth.service');
var data_service_1 = require('../shared/services/data.service');
var items_service_1 = require('../shared/utils/items.service');
var mapping_service_1 = require('../shared/utils/mapping.service');
var ProfileComponent = (function () {
    function ProfileComponent(route, authService, dataService, itemsService, mappingService) {
        this.route = route;
        this.authService = authService;
        this.dataService = dataService;
        this.itemsService = itemsService;
        this.mappingService = mappingService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            //console.log(params);
            _this.user = params;
            //console.log(this.user.favorites);
        });
        this.loadFavorites();
        this.getUser();
        // this.dataService.getUser()
        // //console.log(this.mappingService.getUser())
        ////console.log();
    };
    ProfileComponent.prototype.loadFavorites = function () {
        var _this = this;
        this.favoteOrderKeys = [];
        var uid = this.authService.getLoggedInUser().uid;
        this.dataService.getFavoriteOrders(uid)
            .then(function (snapshot) {
            var favoritesOrders = snapshot.val();
            _this.itemsService.getKeys(favoritesOrders)
                .forEach(function (orderKey) {
                _this.favoteOrderKeys.push(orderKey);
            });
            _this.getOreders();
        });
    };
    ProfileComponent.prototype.getOreders = function () {
        var _this = this;
        this.orders = [];
        this.favoteOrderKeys.forEach(function (key) {
            _this.dataService.getOrdersRef().child(key).once('value').
                then(function (snapshot) {
                _this.orders.unshift(_this.mappingService.getOrder(snapshot.val(), key));
                //console.log(this.orders);
            });
        });
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        var uid = this.authService.getLoggedInUser().uid;
        this.dataService.getUser(uid)
            .then(function (snapshot) {
            var user = _this.mappingService.getUser(snapshot, uid);
            //console.log(user);
        });
    };
    ProfileComponent.prototype.joinGroup = function () {
        // let uid = this.authService.getLoggedInUser().uid;
        // let groupKey = '-Kd7O6F4IBXDVNubD17x';
        // this.dataService.addGroupToJoin(uid, groupKey);
        var ref = this.dataService.getUserRef();
        ref
            .orderByChild('groupname')
            .equalTo('worker')
            .on('child_added', function (snapshot) {
            //console.log(snapshot.key);
        });
    };
    ProfileComponent.prototype.unsubscribeOrder = function (order) {
        var _this = this;
        var uid = this.authService.getLoggedInUser().uid;
        this.dataService.removeFavorites(uid, order).
            then(function () {
            _this.loadFavorites();
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html',
            styleUrls: ['profile.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, auth_service_1.AuthService, data_service_1.DataService, items_service_1.ItemsService, mapping_service_1.MappingService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map