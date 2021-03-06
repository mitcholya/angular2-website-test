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
var core_2 = require('angular2-google-maps/core');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap');
var ng2_bootstrap_3 = require('ng2-bootstrap');
var ng2_bootstrap_4 = require('ng2-bootstrap');
var ng2_bootstrap_5 = require('ng2-bootstrap');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var ng2_bootstrap_6 = require('ng2-bootstrap');
var ng2_bootstrap_7 = require('ng2-bootstrap');
var app_component_1 = require('./app.component');
var date_format_pipe_1 = require('./shared/pipes/date-format.pipe');
var highlight_directive_1 = require('./shared/directives/highlight.directive');
var home_component_1 = require('./home/home.component');
var mobile_hide_directive_1 = require('./shared/directives/mobile-hide.directive');
var schedule_edit_component_1 = require('./schedules/schedule-edit.component');
var schedule_list_component_1 = require('./schedules/schedule-list.component');
//import { UserCardComponent } from './users/user-card.component';
var user_list_component_1 = require('./users/user-list.component');
var app_routes_1 = require('./app.routes');
var search_bar_component_1 = require('./search/search-bar.component');
var company_component_1 = require('./company/company.component');
var login_component_1 = require('./login/login.component');
var order_component_1 = require('./order/order.component');
var order_details_component_1 = require('./order-details/order-details.component');
var profile_component_1 = require('./profile/profile.component');
var customer_list_component_1 = require('./customer-list/customer-list.component');
var user_card_component_1 = require('./customer-list/user-card.component');
var map_component_1 = require('./map/map.component');
var map_orders_component_1 = require('./map/map-orders.component');
var signup_component_1 = require('./login/signup.component');
var email_verify_component_1 = require('./login/emal-verify/email-verify.component');
var data_service_1 = require('./shared/services/data.service');
var config_service_1 = require('./shared/utils/config.service');
var items_service_1 = require('./shared/utils/items.service');
var mapping_service_1 = require('./shared/utils/mapping.service');
var notification_service_1 = require('./shared/utils/notification.service');
var auth_service_1 = require('./shared/services/auth.service');
var email_validators_1 = require('./shared/validators/email.validators');
var password_validators_1 = require('./shared/validators/password.validators');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_2.DatepickerModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                ng2_bootstrap_3.Ng2BootstrapModule,
                ng2_bootstrap_4.ModalModule.forRoot(),
                ng2_bootstrap_5.ProgressbarModule,
                ng2_bootstrap_1.PaginationModule.forRoot(),
                app_routes_1.routing,
                ng2_bootstrap_6.TimepickerModule,
                ng2_bootstrap_7.TypeaheadModule.forRoot(),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBJm0chrrywvv3uvOOuMGvQmJ8NLZTYXuY'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                date_format_pipe_1.DateFormatPipe,
                highlight_directive_1.HighlightDirective,
                home_component_1.HomeComponent,
                mobile_hide_directive_1.MobileHideDirective,
                schedule_edit_component_1.ScheduleEditComponent,
                schedule_list_component_1.ScheduleListComponent,
                ng2_slim_loading_bar_1.SlimLoadingBarComponent,
                user_card_component_1.UserCardComponent,
                user_list_component_1.UserListComponent,
                search_bar_component_1.SearchBarComponent,
                company_component_1.CompanyComponent,
                login_component_1.LoginComponent,
                order_component_1.OrderComponent,
                order_details_component_1.OrderDetailsComponent,
                profile_component_1.ProfileComponent,
                customer_list_component_1.CustomerListComponent,
                map_component_1.MapComponent,
                map_orders_component_1.MapOrdersComponent,
                signup_component_1.SignUpComponent,
                email_verify_component_1.EmailVerifyComponent
            ],
            providers: [
                config_service_1.ConfigService,
                data_service_1.DataService,
                items_service_1.ItemsService,
                mapping_service_1.MappingService,
                notification_service_1.NotificationService,
                ng2_slim_loading_bar_1.SlimLoadingBarService,
                auth_service_1.AuthService,
                email_validators_1.EmailValidator,
                password_validators_1.PasswordValidator
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map