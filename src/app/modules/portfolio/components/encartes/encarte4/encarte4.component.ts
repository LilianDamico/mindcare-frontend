import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encarte4',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './encarte4.component.html',
  styleUrls: ['./encarte4.component.scss']
})
export class Encarte4Component {
  testimonials = [
    {
      name: 'Cliente 1',
      company: 'Paciente',
      quote: 'O produto realmente transformou meu tratamento!',
      photoUrl: 'assets/images/cliente1.jpg', 
      caseStudyLink: '/case-study/cliente1'
    },
    {
      name: 'Cliente 2',
      company: '',
      quote: 'Conseguimos alcançar resultados incríveis!',
      photoUrl: 'assets/images/cliente2.jpg', 
      caseStudyLink: '/case-study/cliente2'
    }
    
  ];
}
