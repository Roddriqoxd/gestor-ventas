import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CreateUserComponent } from '../../user/create-user/create-user.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CreateUserComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
