import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { TitleComponent } from "../../../shared/title/title.component";
import { TextAreaComponent } from "../../../shared/text-area/text-area.component";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TitleComponent, TextAreaComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

}
