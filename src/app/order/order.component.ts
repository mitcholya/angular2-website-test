import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls:['order.component.css']
})
export class OrderComponent {

    constructor(private dataService: DataService) {

    }

    addOrder() {
        let order = {
            title: 'Помочь по хозяайству',
            description: 'Подмести полы'
        }
        this.dataService.addOrder(order);
    }
}