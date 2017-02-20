"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var user_list_component_1 = require('./users/user-list.component');
var schedule_list_component_1 = require('./schedules/schedule-list.component');
var schedule_edit_component_1 = require('./schedules/schedule-edit.component');
var company_component_1 = require('./company/company.component');
var order_details_component_1 = require('./order-details/order-details.component');
var profile_component_1 = require('./profile/profile.component');
var customer_list_component_1 = require('./customer-list/customer-list.component');
var appRoutes = [
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'schedules', component: schedule_list_component_1.ScheduleListComponent },
    { path: 'schedules/:id/edit', component: schedule_edit_component_1.ScheduleEditComponent },
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'order-details', component: order_details_component_1.OrderDetailsComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'customer-list', component: customer_list_component_1.CustomerListComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map