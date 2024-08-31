import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [TitleComponent, InputComponent, ButtonComponent, MatIconModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

}
