import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
@Input() title: String = 'Titulo here';
@Input() nameButton: String = '';

}
