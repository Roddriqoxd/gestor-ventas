import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../../intefaces/user.interface';
import { ApiService } from '../../../core/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule,TitleComponent, InputComponent, ButtonComponent, MatIconModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

  userList!: User[]
  today: number = Date.now();

  constructor(private _api: ApiService) {

  }


  ngOnInit(): void {
    this._api.getData().pipe().subscribe((xx)=>{
      this.userList = xx
    }
    );
  }




}
