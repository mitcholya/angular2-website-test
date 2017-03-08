import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/services/data.service';
import { MappingService } from '../shared/utils/mapping.service';
import { IUser } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
    public customers: Array<IUser>;
    public users: Array<any>;

    constructor(private dataService: DataService,
                private mappingService: MappingService) {
        
    }

    ngOnInit() {
        this.loadCustomers();
    }

    loadCustomers() {
        this.customers = [];
        this.dataService.getUserRef()
            .orderByChild('groupname')
            .equalTo('customer')
            .on('child_added', (snapshot) => {
                ////console.log(snapshot.key);

                this.dataService.getUser(snapshot.key)
                    .then((snapshot) => {
                      ////console.log(snapshot.val());
                      let customer = this.mappingService.getUser(snapshot.val(), snapshot.key);
                      this.customers.push(customer);
                      //console.log(customer.favorites);
                      //console.log(this.customers);
                    })

            })
    }
}