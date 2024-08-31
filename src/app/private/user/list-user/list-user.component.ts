import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [TitleComponent, InputComponent, ButtonComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

}
