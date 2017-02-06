import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

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
import { UserCardComponent } from './users/user-card.component';
import { UserListComponent } from './users/user-list.component';
import { routing } from './app.routes';
import { SearchBarComponent } from './search/search-bar.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
  
import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';
import { AuthService } from './shared/services/auth.service';

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
        TypeaheadModule.forRoot()
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
        ProfileComponent
    ],
    providers: [
        ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService,
        SlimLoadingBarService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }