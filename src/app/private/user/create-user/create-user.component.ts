import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

}
