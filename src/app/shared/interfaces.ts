export interface IUser {
    uid: string;
    groupname: string;
    favorites: string[];
    username: string
}

export interface ICustomer {
    cid: string;
    customername: string;
    
}

export interface ISchedule {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: number[];
}

export interface IScheduleDetails {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: IUser[];
     statuses: string[];
     types: string[];
}

export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}

export interface IService {
    sid: string;
    location: string;
    title: string;
    category: string;
    description: string;
    phone: string;

}

export interface IOrder {
    oid: string;
    title: string;
    description: string;
    location: {
        latitude: number,
        longitude: number
    }
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface IGroup {
    gid: string;
    groupname: string;
}