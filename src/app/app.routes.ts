import { Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import path from 'path';
import { CreateUserComponent } from './private/user/create-user/create-user.component';
import { LoginComponent } from './public/login/login.component';
import { ListUserComponent } from './private/user/list-user/list-user.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    }, 
    { path: 'dashboard', component: DashboardComponent, children: [
        {
            path: 'create',
            component: CreateUserComponent
        },
        {
            path: 'list',
            component: ListUserComponent
        }
    ] 
    },
];
