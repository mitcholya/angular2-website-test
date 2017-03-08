import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'user-card',
    templateUrl: 'user-card.component.html',
    styleUrls: ['user-card.component.css']
})

export class UserCardComponent implements OnInit {

    @Input() item: string;
    constructor() {
        
    }

    ngOnInit() {
        //console.log(this.item);
    }
}