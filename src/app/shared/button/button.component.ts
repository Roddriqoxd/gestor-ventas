import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() name: any = 'Name button'
@Input() iconName: any = 'add'
@Output() onClick = new EventEmitter<MouseEvent>();


eventClick(event: MouseEvent) {
  this.onClick.emit(event)
  }
}
