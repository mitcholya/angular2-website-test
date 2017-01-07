"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-operators');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_3 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_4 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_5 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var ng2_bootstrap_6 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./app.component');
// import { DateFormatPipe } from './shared/pipes/date-format.pipe';
// import { HighlightDirective } from './shared/directives/highlight.directive';
// import { HomeComponent } from './home/home.component';
// import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
// import { ScheduleEditComponent } from './schedules/schedule-edit.component';
// import { ScheduleListComponent } from './schedules/schedule-list.component';
// import { UserCardComponent } from './users/user-card.component';
// import { UserListComponent } from './users/user-list.component';
// import { routing } from './app.routes';
// import { DataService } from './shared/services/data.service';
// import { ConfigService } from './shared/utils/config.service';
// import { ItemsService } from './shared/utils/items.service';
// import { MappingService } from './shared/utils/mapping.service';
// import { NotificationService } from './shared/utils/notification.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_2.DatepickerModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_bootstrap_3.Ng2BootstrapModule,
                ng2_bootstrap_4.ModalModule,
                ng2_bootstrap_5.ProgressbarModule,
                ng2_bootstrap_1.PaginationModule,
                // routing,
                ng2_bootstrap_6.TimepickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                // DateFormatPipe,
                // HighlightDirective,
                // HomeComponent,
                // MobileHideDirective,
                // ScheduleEditComponent,
                // ScheduleListComponent,
                ng2_slim_loading_bar_1.SlimLoadingBarComponent,
            ],
            providers: [
                // ConfigService,
                // DataService,
                // ItemsService,
                // MappingService,
                // NotificationService,
                ng2_slim_loading_bar_1.SlimLoadingBarService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map