import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service'; 

@Component({
    moduleId: module.id,
    selector: 'order-details',
    templateUrl: 'order-details.component.html',
    styleUrls: ['order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

    public sub: any;
    public order: any;

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