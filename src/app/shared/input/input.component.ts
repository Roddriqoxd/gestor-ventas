import { Component, Input } from '@angular/core';
import { FormControl,FormControlName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() control!: FormControlName;
  @Input() label!: string; 
  @Input() type: string = 'text'; 
  
  constructor(){

  }
}
