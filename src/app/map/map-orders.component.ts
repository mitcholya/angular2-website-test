import { Component, OnInit } from '@angular/core';
import { MappingService } from '../shared/utils/mapping.service';
import { DataService } from '../shared/services/data.service'; 

@Component({
    moduleId: module.id,
    selector: 'map-orders',
    templateUrl: 'map-orders.component.html',
    styleUrls: [ 'map-orders.component.css']
})

export class MapOrdersComponent implements OnInit {
    
    public title: string = 'My first angular2-google-maps project';
    public lat: number = 51.678418;
    public lng: number = 7.809007;
    //public markers:any[] = [];
    
    constructor(private mappingService: MappingService,
                private dataService: DataService) {

    }

    ngOnInit() {
        // this.dataService.getOrders()
        //     .then((snapshot) => {
        //         this.markers = this.mappingService.getOrders(snapshot);
        //         console.log(this.markers);
        //     })
    }
}