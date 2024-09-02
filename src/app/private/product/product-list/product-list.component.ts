import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { InputComponent } from '../../../shared/input/input.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TitleComponent, InputComponent, ButtonComponent, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}
