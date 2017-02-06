import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { CompanyComponent } from './company/company.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'schedules', component: ScheduleListComponent },
    { path: 'schedules/:id/edit', component: ScheduleEditComponent },
    { path: 'company', component: CompanyComponent},
    { path: 'order-details', component: OrderDetailsComponent},
    { path: 'profile', component: ProfileComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);