import { Component } from '@angular/core';
import { Encarte1Component } from '../encartes/encarte1/encarte1.component';
import { Encarte2Component } from '../encartes/encarte2/encarte2.component';
import { Encarte3Component } from '../encartes/encarte3/encarte3.component';
import { Encarte4Component } from '../encartes/encarte4/encarte4.component';
import { Encarte5Component } from '../encartes/encarte5/encarte5.component';
import { Encarte6Component } from '../encartes/encarte6/encarte6.component';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    Encarte1Component, 
    Encarte2Component,
    Encarte3Component,
    Encarte4Component,
    Encarte5Component,
    Encarte6Component
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {

}
