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
var data_service_1 = require('../shared/services/data.service');
var auth_service_1 = require('../shared/services/auth.service');
var OrderDetailsComponent = (function () {
    // public title: string = 'My first angular2-google-maps project';
    // public lat: number = 51.678418;
    // public lng: number = 7.809007;
    function OrderDetailsComponent(route, dataService, authService) {
        this.route = route;
        this.dataService = dataService;
        this.authService = authService;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            _this.order = params;
        });
    };
    OrderDetailsComponent.prototype.addToFavorites = function () {
        var uid = this.authService.getLoggedInUser().uid;
        this.dataService.addOrderToFavorites(uid, this.order.oid);
    };
    OrderDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order-details',
            templateUrl: 'order-details.component.html',
            styleUrls: ['order-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, data_service_1.DataService, auth_service_1.AuthService])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());
exports.OrderDetailsComponent = OrderDetailsComponent;
//# sourceMappingURL=order-details.component.js.map