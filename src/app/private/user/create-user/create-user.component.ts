import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { InputComponent } from "../../../shared/input/input.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [TitleComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  form: FormGroup = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email]),
  })



  // fields: { controlName: string, label: string, type: string }[] = [
  //   { controlName: 'name', label: 'Name', type: 'text' },
  //   { controlName: 'email', label: 'Email', type: 'email' },
  //   { controlName: 'age', label: 'Age', type: 'number' }
  // ];

  constructor(private fb: FormBuilder) {
    // this.form = this.fb.group({});
    // this.fields.forEach(field => {
    //   this.form.addControl(field.controlName, this.fb.control('', Validators.required));
    // });
  }
}
