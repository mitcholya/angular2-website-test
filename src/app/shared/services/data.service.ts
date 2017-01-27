import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser, ISchedule, IScheduleDetails, Pagination, PaginatedResult } from '../interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';

declare var firebase: any;

@Injectable()
export class DataService {

    _baseUrl: string = '';

    databaseRef: any = firebase.database();
    //placeRef: any = firebase.database().ref('place');
    serviceRef:any = firebase.database().ref('service/');
    storageRef: any = firebase.storage().ref();
    usersRef: any = firebase.database().ref('users');
    ordersRef:any = firebase.database().ref('orders');
    

    constructor(private http: Http,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    getDatabaseRef() {
        return this.databaseRef;
    }

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

    getServiceRef() {
        return this.serviceRef;
    }

    addService(service) {
        return this.serviceRef.push().set(service);
    }

    addOrder(order) {
        return this.ordersRef.push().set(order);
    }

    searchService(service) {
        return this.serviceRef.orderByChild('service').equalTo(service).once('value');
    }

    getServices() {
        return this.serviceRef.once('value');
    }

    getStorageRef() {
        return this.storageRef;
    }

    getUser(userUid: string) {
        return this.usersRef.child(userUid).once('value');
    }
    
    getUsername(userUid: string) {
        return this.usersRef.child(userUid + '/username').once('value');
    }

    getUsers(): Observable<IUser[]> {
        return this.http.get(this._baseUrl + 'users')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    getUserSchedules(id: number): Observable<ISchedule[]> {
        return this.http.get(this._baseUrl + 'users/' + id + '/schedules')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    createUser(user: IUser): Observable<IUser> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this._baseUrl + 'users/', JSON.stringify(user), {
            headers: headers
        })
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    updateUser(user: IUser): Observable<void> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._baseUrl + 'users/' + user.id, JSON.stringify(user), {
            headers: headers
        })
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete(this._baseUrl + 'users/' + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }
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

    getSchedules(page?: number, itemsPerPage?: number): Observable<PaginatedResult<ISchedule[]>> {
        var peginatedResult: PaginatedResult<ISchedule[]> = new PaginatedResult<ISchedule[]>();

        let headers = new Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }

        return this.http.get(this._baseUrl + 'schedules', {
            headers: headers
        })
            .map((res: Response) => {
                console.log(res.headers.keys());
                peginatedResult.result = res.json();

                if (res.headers.get("Pagination") != null) {
                    //var pagination = JSON.parse(res.headers.get("Pagination"));
                    var paginationHeader: Pagination = this.itemsService.getSerialized<Pagination>(JSON.parse(res.headers.get("Pagination")));
                    console.log(paginationHeader);
                    peginatedResult.pagination = paginationHeader;
                }
                return peginatedResult;
            })
            .catch(this.handleError);
    }

    getSchedule(id: number): Observable<ISchedule> {
        return this.http.get(this._baseUrl + 'schedules/' + id)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    getScheduleDetails(id: number): Observable<IScheduleDetails> {
        return this.http.get(this._baseUrl + 'schedules/' + id + '/details')
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    updateSchedule(schedule: ISchedule): Observable<void> {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._baseUrl + 'schedules/' + schedule.id, JSON.stringify(schedule), {
            headers: headers
        })
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    deleteSchedule(id: number): Observable<void> {
        return this.http.delete(this._baseUrl + 'schedules/' + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    deleteScheduleAttendee(id: number, attendee: number) {

        return this.http.delete(this._baseUrl + 'schedules/' + id + '/removeattendee/' + attendee)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}