import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pag-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pag-form.component.html',
  styleUrls: ['./pag-form.component.scss']
})
export class PagFormComponent {
  plans = [
    { title: 'Plano Básico', price: 'R$ 29,90', benefits: ['Acesso básico', 'Suporte via email'] },
    { title: 'Plano Padrão', price: 'R$ 49,90', benefits: ['Acesso completo', 'Suporte via chat'] },
    { title: 'Plano Premium', price: 'R$ 79,90', benefits: ['Acesso total', 'Suporte 24h', 'Conteúdo exclusivo'] }
  ];

  selectedPlan: any = null;

  selectPlan(plan: any) {
    this.selectedPlan = plan;
  }

  onSubmit(form: any) {
    console.log('Form Data: ', form);
    // Integração com o backend para processamento do pagamento
  }
}
