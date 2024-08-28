import { Component, ElementRef, ViewChild } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ConffetiDirective } from '../../../shared/conffeti.directive';
import { time } from 'console';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [TitleComponent, InputComponent, ReactiveFormsModule, MatIconModule, ButtonComponent, ConffetiDirective],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  @ViewChild('elemento') someInput!: ElementRef;
  displayAnimation!: boolean;

  constructor(private fb: FormBuilder) {
    this.displayAnimation = false;
  }

  enviar($event: MouseEvent) {
    this.displayAnimation = true;
    timer(100).pipe(take(1)).subscribe(()=>{
      this.displayAnimation = false;
    })
    }

}
