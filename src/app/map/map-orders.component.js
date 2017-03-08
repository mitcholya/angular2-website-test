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
var mapping_service_1 = require('../shared/utils/mapping.service');
var data_service_1 = require('../shared/services/data.service');
var MapOrdersComponent = (function () {
    // public markers:any[] = [];
    function MapOrdersComponent(mappingService, dataService) {
        this.mappingService = mappingService;
        this.dataService = dataService;
        this.title = 'Карта заказа';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MapOrdersComponent.prototype.ngOnInit = function () {
        // this.dataService.getOrders()
        //     .then((snapshot) => {
        //         this.markers = this.mappingService.getOrders(snapshot);
        //         //console.log(this.markers);
        //     })
        //console.log(this.lat, this.lng);
        this.lat = Number(this.latitude);
        this.lng = Number(this.longitude);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapOrdersComponent.prototype, "latitude", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapOrdersComponent.prototype, "longitude", void 0);
    MapOrdersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-orders',
            templateUrl: 'map-orders.component.html',
            styleUrls: ['map-orders.component.css']
        }), 
        __metadata('design:paramtypes', [mapping_service_1.MappingService, data_service_1.DataService])
    ], MapOrdersComponent);
    return MapOrdersComponent;
}());
exports.MapOrdersComponent = MapOrdersComponent;
//# sourceMappingURL=map-orders.component.js.map