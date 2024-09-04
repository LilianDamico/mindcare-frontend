import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SquareComponent } from '../../components/square/square.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SquareComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
