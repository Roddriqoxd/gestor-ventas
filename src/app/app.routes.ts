import { Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import path from 'path';
import { CreateUserComponent } from './private/user/create-user/create-user.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent }, 
    { path: 'dash', component: DashboardComponent, children: [
        {
            path: 'create',
            component: CreateUserComponent
        }
    ] }, 
];
