import { Component, input, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatIconModule,ButtonComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
// @Input() title: String = 'Titulo here';
// @Input() nameButton: String = '';
// @Input() iconName: String = 'add';

title = input.required<string>();
nameButton = input<string>('');
iconName = input<string>('add');
}
