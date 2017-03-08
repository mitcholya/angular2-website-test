import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service'; 
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'order-details',
    templateUrl: 'order-details.component.html',
    styleUrls: ['order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

    public sub: any;
    public order: any;
    public latitude: string;
    public longitude: string;
    public title : string;
    // public title: string = 'My first angular2-google-maps project';


    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private authService: AuthService) {
        
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            console.log(params);
            this.order = params;
            this.latitude = this.order.latitude;
            this.longitude = this.order.longitude;
            this.title = this.order.title;
        } )
    }

    addToFavorites() {
        let uid = this.authService.getLoggedInUser().uid;

        this.dataService.addOrderToFavorites(uid, this.order.oid);

    }
}