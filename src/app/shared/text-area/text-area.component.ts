import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  @Input() label: string = 'Ejemplo' 
  @Input() rows: number = 10 
  @Output() value = new EventEmitter<string>();



  saveChange(value: string) {
    this.value.emit(value);
    }
}

