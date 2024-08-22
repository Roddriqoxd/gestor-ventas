import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateUserComponent
  ],
  exports: [
    CreateUserComponent
  ]
})
export class UserModule { }
