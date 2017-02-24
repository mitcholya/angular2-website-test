import { Injectable } from '@angular/core';

import { ISchedule, IScheduleDetails, IUser, IService, IOrder, IGroup } from '../interfaces';
import  { ItemsService } from './items.service'

@Injectable()
export class MappingService {

    constructor(private itemsService : ItemsService) { }

    mapScheduleDetailsToSchedule(scheduleDetails: IScheduleDetails): ISchedule {
        var schedule: ISchedule = {
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
            attendees: this.itemsService.getPropertyValues<IUser, number[]>(scheduleDetails.attendees, 'id')
        }

        return schedule;
    }

    getServices(snapshot: any): Array<IService> {
        let services: Array<IService> = [];
        if (snapshot.val() ==null)
            return services;

        let list = snapshot.val();

        Object.keys(snapshot.val()).map((key: any) =>{
            let service: any = list[key];
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
    }

    getOrders(snapshot: any): Array<IOrder> {
        let orders: Array<IOrder> = [];
        if (snapshot.val() == null)
            return orders;

        let list = snapshot.val();

        Object.keys(snapshot.val()).map((key: any) => {
            let order: any = list[key];
            orders.push({
                oid: key,
                title: order.title,
                description: order.description
            });
        });
        console.log(orders);
        return orders;    
    }

    getOrder(snapshot: any, key: string): IOrder {
        let order: IOrder = {
            oid: key,
            title: snapshot.title,
            description: snapshot.description
        }

        return order;
    }

    getGroups(snapshot: any): Array<IGroup> {
        let groups: Array<IGroup> = [];

        if (snapshot.val() == null)
            return groups;

            let list = snapshot.val();

            Object.keys(snapshot.val()).map((key: any) => {
                let group: any = list[key];
                groups.push({
                    gid: key,
                    groupname: group.groupname
                });
            });
            return groups;    
    }

    getUser(snapshot: any, key: string): IUser {
        let user: IUser = {
            uid: key,
            groupname: snapshot.groupname,
            favorites: snapshot.favorites == undefined ? [] : this.itemsService.getKeys(snapshot.favorites),
            username: snapshot.username
        }

        return user;
    }
}