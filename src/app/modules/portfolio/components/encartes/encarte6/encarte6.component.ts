import { Component } from '@angular/core';

@Component({
  selector: 'app-encarte6',
  standalone: true,
  imports: [],
  templateUrl: './encarte6.component.html',
  styleUrls: ['./encarte6.component.scss']
})
export class Encarte6Component {
  // Propriedades para os textos dinâmicos do card
  title: string = 'Pronto para Começar?';
  description: string = 'Você, profissional, inscreva-se';
  buttonText: string = 'Experimente Agora';
  guarantee: string = '14 dias grátis - Sem necessidade de cartão de crédito';
  nextSteps: string = 'Comece em menos de 5 minutos.';
}
