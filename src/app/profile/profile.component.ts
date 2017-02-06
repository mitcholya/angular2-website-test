import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { DataService } from '../shared/services/data.service';
import { ItemsService } from '../shared/utils/items.service';

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

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private dataService: DataService,
                private itemsService: ItemsService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            console.log(params);
            this.user = params;
            console.log(this.user.favorites);
        })
    }

    loadFavorites() {
        let uid = this.authService.getLoggedInUser().uid;
        this.dataService.getFavoriteOrders(uid)
            .then((snapshot) => {
                let favoritesOrders = snapshot.val();
                this.itemsService.getKeys(favoritesOrders)
                    .forEach((orderKey) => {
                        this.favoteOrderKeys.push(orderKey);
                })
            })
    }
}