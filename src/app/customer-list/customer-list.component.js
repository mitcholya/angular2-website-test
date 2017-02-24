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
var core_1 = require("@angular/core");
var data_service_1 = require('../shared/services/data.service');
var mapping_service_1 = require('../shared/utils/mapping.service');
var CustomerListComponent = (function () {
    function CustomerListComponent(dataService, mappingService) {
        this.dataService = dataService;
        this.mappingService = mappingService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.loadCustomers();
    };
    CustomerListComponent.prototype.loadCustomers = function () {
        var _this = this;
        this.customers = [];
        this.dataService.getUserRef()
            .orderByChild('groupname')
            .equalTo('customer')
            .on('child_added', function (snapshot) {
            //console.log(snapshot.key);
            _this.dataService.getUser(snapshot.key)
                .then(function (snapshot) {
                //console.log(snapshot.val());
                var customer = _this.mappingService.getUser(snapshot.val(), snapshot.key);
                _this.customers.push(customer);
                console.log(customer.favorites);
                console.log(_this.customers);
            });
        });
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-list',
            templateUrl: 'customer-list.component.html',
            styleUrls: ['customer-list.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, mapping_service_1.MappingService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map