import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';
import { MappingService } from '../shared/utils/mapping.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html', 
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    public sub: any;
    public user: any;
    public favoteOrderKeys: string[];
    public orders: any[];

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private dataService: DataService,
                private itemsService: ItemsService,
                private mappingService: MappingService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            //console.log(params);
            this.user = params;
            //console.log(this.user.favorites);
        })
        this.loadFavorites();
        this.getUser();

        // this.dataService.getUser()
        // //console.log(this.mappingService.getUser())
        ////console.log();

    }

    loadFavorites() {
        this.favoteOrderKeys = [];
        let uid = this.authService.getLoggedInUser().uid;
        this.dataService.getFavoriteOrders(uid)
            .then((snapshot) => {
                let favoritesOrders = snapshot.val();
                this.itemsService.getKeys(favoritesOrders)
                    .forEach((orderKey) => {
                        this.favoteOrderKeys.push(orderKey);
                });
                this.getOreders();
            })
    }

    getOreders() {
        this.orders = [];
        this.favoteOrderKeys.forEach((key) => {
            this.dataService.getOrdersRef().child(key).once('value').
                then((snapshot) => {
                    this.orders.unshift(this.mappingService.getOrder(snapshot.val(), key));
                    //console.log(this.orders);
                });
        })
    }

    getUser() {
        let uid = this.authService.getLoggedInUser().uid;
        this.dataService.getUser(uid)
            .then((snapshot) => {
                let user = this.mappingService.getUser(snapshot, uid);
                //console.log(user);
            })
    }

    joinGroup() {


        // let uid = this.authService.getLoggedInUser().uid;
        // let groupKey = '-Kd7O6F4IBXDVNubD17x';
        // this.dataService.addGroupToJoin(uid, groupKey);

        let ref = this.dataService.getUserRef();
        ref
        //.child('o0WPpFdpXQP89CksXvFSgJRPIXW2')
        //.child('username')
        //.child('group')
        .orderByChild('groupname')
            .equalTo('worker')
                .on('child_added',(snapshot) => {
                    //console.log(snapshot.key);
                })
    }

    unsubscribeOrder(order) {
        let uid = this.authService.getLoggedInUser().uid;

        this.dataService.removeFavorites(uid, order).
            then(() => {
                this.loadFavorites();
            });
    }
}