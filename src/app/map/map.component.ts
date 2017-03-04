import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
    styleUrls: [ 'map.component.css']
})

export class MapComponent {
    
    public title: string = 'My first angular2-google-maps project';
    public lat: number = 51.678418;
    public lng: number = 7.809007;
    
    constructor() {

    }
}