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
var items_service_1 = require('../shared/utils/items.service');
var mapping_service_1 = require('../shared/utils/mapping.service');
require('rxjs/add/observable/of');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var _ = require('lodash');
var SearchBarComponent = (function () {
    function SearchBarComponent(data, itemsService, mappingService) {
        this.data = data;
        this.itemsService = itemsService;
        this.mappingService = mappingService;
        this.queryText = '';
        this.emptyResult = '';
    }
    SearchBarComponent.prototype.searchService = function (value) {
        var _this = this;
        this.services2 = [];
        if (this.queryText.trim().length !== 0) {
            this.services = [];
            this.data.getServices().then(function (snapshot) {
                ////console.log(snapshot.val());
                _this.itemsService.reversedItems(_this.mappingService.getServices(snapshot)).forEach(function (service) {
                    if (service.title.toLowerCase().includes(_this.queryText.toLowerCase())) {
                        _this.services.push(service);
                        _this.services2 = _.uniqBy(_this.services, 'sid');
                    }
                });
            });
        }
        else {
            this.services2 = [];
        }
    };
    SearchBarComponent.prototype.loadDetails = function (sid) {
        //console.log(sid);
        this.services2 = [];
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-bar',
            templateUrl: 'search-bar.component.html',
            styleUrls: ['search-bar.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, items_service_1.ItemsService, mapping_service_1.MappingService])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map