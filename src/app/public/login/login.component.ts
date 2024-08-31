import { Component } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _router: Router) {}

clickEvent($event: MouseEvent) {
  this._router.navigate(['/dashboard'])
}

}
