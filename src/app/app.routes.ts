import { Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import path from 'path';
import { CreateUserComponent } from './private/user/create-user/create-user.component';
import { LoginComponent } from './public/login/login.component';
import { ListUserComponent } from './private/user/list-user/list-user.component';
import { CreateProductComponent } from './private/product/create-product/create-product.component';
import { ProductListComponent } from './private/product/product-list/product-list.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    }, 
    { path: 'dashboard', component: DashboardComponent, children: [
        {
            path: 'create-user',
            component: CreateUserComponent
        },
        {
            path: 'user-list',
            component: ListUserComponent
        },
        {
            path: 'create-product',
            component: CreateProductComponent
        },
        {
            path: 'product-list',
            component: ProductListComponent
        }
    ] 
    },
];
