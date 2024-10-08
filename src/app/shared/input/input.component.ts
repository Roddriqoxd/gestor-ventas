import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl,FormControlName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = 'Ejemplo' 
  @Input() type: string = 'text'
  @Output() value = new EventEmitter<string>();



  saveChange(value: string) {
    this.value.emit(value);
    }
}
