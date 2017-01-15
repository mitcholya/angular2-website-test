import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';

@Component({
    moduleId: module.id,
    selector: 'company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.component.css']
})
export class CompanyComponent implements OnInit {

    private sub:any;
    private company;
    private image;
    constructor(private route: ActivatedRoute,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.company = params;
            this.getUserImage().then(url => {
                this.image = url;
            });
        });

        
    }

    getUserImage() {
        console.log(this.company.sid);
        return this.dataService.getStorageRef().child('images/' + this.company.sid + '/profile.jpg').getDownloadURL();
    }

}