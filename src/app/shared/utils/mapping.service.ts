import { Injectable } from '@angular/core';

import { ISchedule, IScheduleDetails, IUser, IService } from '../interfaces';
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


}