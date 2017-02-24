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
var items_service_1 = require('./items.service');
var MappingService = (function () {
    function MappingService(itemsService) {
        this.itemsService = itemsService;
    }
    MappingService.prototype.mapScheduleDetailsToSchedule = function (scheduleDetails) {
        var schedule = {
            id: scheduleDetails.id,
            title: scheduleDetails.title,
            description: scheduleDetails.description,
            timeStart: scheduleDetails.timeStart,
            timeEnd: scheduleDetails.timeEnd,
            location: scheduleDetails.location,
            type: scheduleDetails.type,
            status: scheduleDetails.status,
            dateCreated: scheduleDetails.dateCreated,
            dateUpdated: scheduleDetails.dateUpdated,
            creator: scheduleDetails.creator,
            creatorId: scheduleDetails.creatorId,
            attendees: this.itemsService.getPropertyValues(scheduleDetails.attendees, 'id')
        };
        return schedule;
    };
    MappingService.prototype.getServices = function (snapshot) {
        var services = [];
        if (snapshot.val() == null)
            return services;
        var list = snapshot.val();
        Object.keys(snapshot.val()).map(function (key) {
            var service = list[key];
            services.push({
                sid: key,
                location: service.location,
                title: service.title,
                category: service.category,
                description: service.description,
                phone: service.phone
            });
        });
        return services;
    };
    MappingService.prototype.getOrders = function (snapshot) {
        var orders = [];
        if (snapshot.val() == null)
            return orders;
        var list = snapshot.val();
        Object.keys(snapshot.val()).map(function (key) {
            var order = list[key];
            orders.push({
                oid: key,
                title: order.title,
                description: order.description
            });
        });
        console.log(orders);
        return orders;
    };
    MappingService.prototype.getOrder = function (snapshot, key) {
        var order = {
            oid: key,
            title: snapshot.title,
            description: snapshot.description
        };
        return order;
    };
    MappingService.prototype.getGroups = function (snapshot) {
        var groups = [];
        if (snapshot.val() == null)
            return groups;
        var list = snapshot.val();
        Object.keys(snapshot.val()).map(function (key) {
            var group = list[key];
            groups.push({
                gid: key,
                groupname: group.groupname
            });
        });
        return groups;
    };
    MappingService.prototype.getUser = function (snapshot, key) {
        var user = {
            uid: key,
            groupname: snapshot.groupname,
            favorites: snapshot.favorites == undefined ? [] : this.itemsService.getKeys(snapshot.favorites),
            username: snapshot.username
        };
        return user;
    };
    MappingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], MappingService);
    return MappingService;
}());
exports.MappingService = MappingService;
//# sourceMappingURL=mapping.service.js.map