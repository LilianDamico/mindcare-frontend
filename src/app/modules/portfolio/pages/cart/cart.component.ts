import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PagFormComponent } from '../../components/pag-form/pag-form.component';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    HeaderComponent, 
    PagFormComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
