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
var mapping_service_1 = require('../shared/utils/mapping.service');
var items_service_1 = require('../shared/utils/items.service');
var auth_service_1 = require('../shared/services/auth.service');
require('rxjs/add/operator/map');
var _ = require('lodash');
var OrderComponent = (function () {
    function OrderComponent(dataService, mappingService, itemsService, authService) {
        this.dataService = dataService;
        this.mappingService = mappingService;
        this.itemsService = itemsService;
        this.authService = authService;
        this.firebaseAccount = {};
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseAccount = this.authService.getLoggedInUser();
        if (this.firebaseAccount) {
            this.userLogged = true;
        }
        // this.authService.getLoggedInUser().
        //     subscribe(() => {
        //         //console.log('Привет!!!');
        //     })
        // this.loadUser().
        //     subscribe(() => {
        //         this.userLogged = true;
        //     })
        this.dataService.getOrders().
            then(function (snapshot) {
            //console.log(snapshot.val());
            var arr = _this.mappingService.getOrders(snapshot);
            _this.orders = _.uniqBy(arr, 'oid');
            //console.log(this.orders);
        });
        this.dataService.getOrders().
            then(function (snapshot) {
            //console.log(snapshot.val());
        });
    };
    // loadUser(): Observable<any>  {
    //     return this.authService.getLoggedInUser();
    // }
    OrderComponent.prototype.showOrders = function () {
        var _this = this;
        this.dataService.getOrders().
            then(function (snapshot) {
            //console.log(snapshot);
            _this.orders = _this.mappingService.getOrders(snapshot);
        });
    };
    OrderComponent.prototype.addOrder = function () {
        var order = {
            title: 'Помочь по хозяайству',
            description: 'Постирать белье'
        };
        this.dataService.addOrder(order);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OrderComponent.prototype, "userLogged", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order',
            templateUrl: 'order.component.html',
            styleUrls: ['order.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, mapping_service_1.MappingService, items_service_1.ItemsService, auth_service_1.AuthService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map