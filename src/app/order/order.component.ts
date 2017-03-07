import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { MappingService } from '../shared/utils/mapping.service';
import { ItemsService } from '../shared/utils/items.service';
import { AuthService} from '../shared/services/auth.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls:['order.component.css']
})
export class OrderComponent implements OnInit {

    public orders: any;
    public firebaseAccount: any = {};
    //public userLogged: any;
    @Input() userLogged: boolean;

    constructor(private dataService: DataService,
                private mappingService: MappingService,
                private itemsService: ItemsService,
                private authService: AuthService) {

    }

    ngOnInit() {
        this.firebaseAccount = this.authService.getLoggedInUser();
        if (this.firebaseAccount) {
            this.userLogged = true;
        }
        // this.authService.getLoggedInUser().
        //     subscribe(() => {
        //         console.log('Привет!!!');
        //     })
        // this.loadUser().
        //     subscribe(() => {
        //         this.userLogged = true;
        //     })
        this.dataService.getOrders().
            then((snapshot) => {
                console.log(snapshot.val());
                 let arr = this.mappingService.getOrders(snapshot);
                 this.orders = _.uniqBy(arr, 'oid');
                 console.log(this.orders);
            });

        this.dataService.getOrders().
            then((snapshot) => {
                console.log(snapshot.val());
            });    
    }

    // loadUser(): Observable<any>  {
    //     return this.authService.getLoggedInUser();
    // }

    showOrders() {
        this.dataService.getOrders().
            then((snapshot) => {
                console.log(snapshot);
                this.orders = this.mappingService.getOrders(snapshot);
            });
    }

    addOrder() {
        let order = {
            title: 'Помочь по хозяайству',
            description: 'Постирать белье'
        }
        this.dataService.addOrder(order);
    }
}