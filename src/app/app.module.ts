import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { PaginationModule } from 'ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap';
import { TypeaheadModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
//import { UserCardComponent } from './users/user-card.component';
import { UserListComponent } from './users/user-list.component';
import { routing } from './app.routes';
import { SearchBarComponent } from './search/search-bar.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserCardComponent } from './customer-list/user-card.component';
import { MapComponent } from './map/map.component';
import { MapOrdersComponent } from './map/map-orders.component';
import { SignUpComponent } from './login/signup.component';
  
import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';
import { AuthService } from './shared/services/auth.service';
import { EmailValidator } from './shared/validators/email.validators';

@NgModule({
    imports: [
        BrowserModule,
        DatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Ng2BootstrapModule,
        ModalModule.forRoot(),
        ProgressbarModule,
        PaginationModule.forRoot(),
        routing,
        TimepickerModule,
        TypeaheadModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBJm0chrrywvv3uvOOuMGvQmJ8NLZTYXuY'
        })
    ],
    declarations: [
        AppComponent,
        DateFormatPipe,
        HighlightDirective,
        HomeComponent,
        MobileHideDirective,
        ScheduleEditComponent,
        ScheduleListComponent,
        SlimLoadingBarComponent,
        UserCardComponent,
        UserListComponent,
        SearchBarComponent,
        CompanyComponent,
        LoginComponent,
        OrderComponent,
        OrderDetailsComponent,
        ProfileComponent,
        CustomerListComponent,
        MapComponent,
        MapOrdersComponent,
        SignUpComponent
    ],
    providers: [
        ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService,
        SlimLoadingBarService,
        AuthService,
        EmailValidator
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }