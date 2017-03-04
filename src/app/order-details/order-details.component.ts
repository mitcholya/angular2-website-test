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
    // public title: string = 'My first angular2-google-maps project';
    // public lat: number = 51.678418;
    // public lng: number = 7.809007;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private authService: AuthService) {
        
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.order = params;
        } )
    }

    addToFavorites() {
        let uid = this.authService.getLoggedInUser().uid;

        this.dataService.addOrderToFavorites(uid, this.order.oid);

    }
}