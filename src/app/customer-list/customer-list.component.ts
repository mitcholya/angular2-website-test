import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/services/data.service';

@Component({
    moduleId: module.id,
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styleUrls: ['customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

    constructor(private dataService: DataService) {
        
    }

    ngOnInit() {
        this.dataService.getUserRef()
            .orderByChild('groupname')
            .equalTo('customer')
            .on('child_added', (snapshot) => {
                console.log(snapshot.key);
            })
    }

    loadCustomers() {
        
    }
}