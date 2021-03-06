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
var http_1 = require('@angular/http');
//Grab everything with import 'rxjs/Rx';
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var interfaces_1 = require('../interfaces');
var items_service_1 = require('../utils/items.service');
var config_service_1 = require('../utils/config.service');
var DataService = (function () {
    function DataService(http, itemsService, configService) {
        this.http = http;
        this.itemsService = itemsService;
        this.configService = configService;
        this._baseUrl = '';
        this.databaseRef = firebase.database();
        //placeRef: any = firebase.database().ref('place');
        this.serviceRef = firebase.database().ref('service/');
        this.storageRef = firebase.storage().ref();
        this.usersRef = firebase.database().ref('users');
        this.ordersRef = firebase.database().ref('orders');
        this.customersRef = firebase.database().ref('customers');
        this.groupRef = firebase.database().ref('group');
        this._baseUrl = configService.getApiURI();
    }
    DataService.prototype.getDatabaseRef = function () {
        return this.databaseRef;
    };
    // getPlaceRef() {
    //     return this.placeRef;
    // }
    // getPlaces() {
    //     return this.placeRef.once('value');
    // }
    // addService(place, service) {
    //     return this.placeRef.child('/' + place).push().set(service);
    // }
    // searchService() {
    //     return this.placeRef.
    // }
    DataService.prototype.getServiceRef = function () {
        return this.serviceRef;
    };
    DataService.prototype.getUserRef = function () {
        return this.usersRef;
    };
    DataService.prototype.addService = function (service) {
        return this.serviceRef.push().set(service);
    };
    DataService.prototype.addOrder = function (order) {
        return this.ordersRef.push().set(order);
    };
    DataService.prototype.addGroup = function (group) {
        return this.groupRef.push().set(group);
    };
    DataService.prototype.searchService = function (service) {
        return this.serviceRef.orderByChild('service').equalTo(service).once('value');
    };
    DataService.prototype.getServices = function () {
        return this.serviceRef.once('value');
    };
    DataService.prototype.getOrdersRef = function () {
        return this.ordersRef;
    };
    DataService.prototype.getOrders = function () {
        return this.ordersRef.once('value');
    };
    DataService.prototype.getStorageRef = function () {
        return this.storageRef;
    };
    DataService.prototype.getUser = function (userUid) {
        return this.usersRef.child(userUid).once('value');
    };
    DataService.prototype.getUsername = function (userUid) {
        return this.usersRef.child(userUid + '/username').once('value');
    };
    DataService.prototype.addOrderToFavorites = function (userKey, orderKey) {
        return this.usersRef.child(userKey + '/favorites/' + orderKey).set(true);
    };
    DataService.prototype.addGroupToJoin = function (userKey, groupKey) {
        return this.usersRef.child(userKey + '/group/' + groupKey).set(true);
    };
    DataService.prototype.getFavoriteOrders = function (user) {
        return this.usersRef.child(user + '/favorites/').once('value');
    };
    DataService.prototype.getUserGroup = function (user) {
    };
    DataService.prototype.removeFavorites = function (user, order) {
        return this.usersRef.child(user + '/favorites/' + order).remove();
    };
    DataService.prototype.getUsers = function () {
        return this.http.get(this._baseUrl + 'users')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.getUserSchedules = function (id) {
        return this.http.get(this._baseUrl + 'users/' + id + '/schedules')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.createUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'users/', JSON.stringify(user), {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    // updateUser(user: IUser): Observable<void> {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put(this._baseUrl + 'users/' + user.id, JSON.stringify(user), {
    //         headers: headers
    //     })
    //         .map((res: Response) => {
    //             return;
    //         })
    //         .catch(this.handleError);
    // }
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete(this._baseUrl + 'users/' + id)
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    /*
    getSchedules(page?: number, itemsPerPage?: number): Observable<ISchedule[]> {
        let headers = new Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }
        return this.http.get(this._baseUrl + 'schedules', {
            headers: headers
        })
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
    */
    DataService.prototype.getSchedules = function (page, itemsPerPage) {
        var _this = this;
        var peginatedResult = new interfaces_1.PaginatedResult();
        var headers = new http_1.Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }
        return this.http.get(this._baseUrl + 'schedules', {
            headers: headers
        })
            .map(function (res) {
            //console.log(res.headers.keys());
            peginatedResult.result = res.json();
            if (res.headers.get("Pagination") != null) {
                //var pagination = JSON.parse(res.headers.get("Pagination"));
                var paginationHeader = _this.itemsService.getSerialized(JSON.parse(res.headers.get("Pagination")));
                //console.log(paginationHeader);
                peginatedResult.pagination = paginationHeader;
            }
            return peginatedResult;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getSchedule = function (id) {
        return this.http.get(this._baseUrl + 'schedules/' + id)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.getScheduleDetails = function (id) {
        return this.http.get(this._baseUrl + 'schedules/' + id + '/details')
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateSchedule = function (schedule) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this._baseUrl + 'schedules/' + schedule.id, JSON.stringify(schedule), {
            headers: headers
        })
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deleteSchedule = function (id) {
        return this.http.delete(this._baseUrl + 'schedules/' + id)
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deleteScheduleAttendee = function (id, attendee) {
        return this.http.delete(this._baseUrl + 'schedules/' + id + '/removeattendee/' + attendee)
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            //console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, items_service_1.ItemsService, config_service_1.ConfigService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map