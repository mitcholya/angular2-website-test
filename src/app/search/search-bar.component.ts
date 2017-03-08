import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { IService } from '../shared/interfaces';
import { ItemsService } from '../shared/utils/items.service';
import { MappingService } from '../shared/utils/mapping.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import * as _ from 'lodash';


@Component({
    moduleId: module.id,
    selector: 'search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent {

    queryText: string = '';
    emptyResult: string = '';
    dataObservable: any;
    public services: any;
    public services2: any;

    constructor(public data: DataService,
        public itemsService: ItemsService,
        public mappingService: MappingService) {


    }

    searchService(value) {
        this.services2 = [];
        if (this.queryText.trim().length !== 0) {
            this.services = [];
            this.data.getServices().then((snapshot) => {
                ////console.log(snapshot.val());
                this.itemsService.reversedItems<IService>(this.mappingService.getServices(snapshot)).forEach((service) => {
                    if (service.title.toLowerCase().includes(this.queryText.toLowerCase())) {
                        this.services.push(service);
                        this.services2 = _.uniqBy(this.services, 'sid');
                        //console.log(this.services);
                    }
                });
            });
        } else {
            this.services2 = [];
            // this.emptyResult = 'По вашему запросу ничего не найдено';
        }
    }

    loadDetails(sid: string) {
        //console.log(sid);
        this.services2 = [];
    }
}