import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encarte3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './encarte3.component.html',
  styleUrls: ['./encarte3.component.scss']
})
export class Encarte3Component {
  useCases = [
    {
      title: 'Setor de Saúde',
      description: 'Os profissionais de saúde utilizam MindCare para gerenciar registros de pacientes e melhorar a eficiência no atendimento.',
      testimonials: [
        { message: 'O produto revolucionou nosso fluxo de trabalho!', author: 'Dra. Ana Souza' },
        { message: 'Facilitou muito o nosso dia a dia.', author: 'Enfermeira Beatriz Silva' }
      ],
      image: 'assets/images/healthcare-example.png',
      caseStudyLink: '/estudo-de-caso/saude',
      videoLink: '/videos/demonstrativo-saude'
    },
    {
      title: 'Pacientes e Familiares',
      description: 'Pacientes e seus familiares estão utilizando MindCare para otimizar a gestão do tratamento e melhorar a comunicação entre medicos e pacientes.',
      testimonials: [
        { message: 'Trouxe mais conforto e segurança com o uso de uma agenda que emite alertas antes de vencer o horário da medicação.', author: 'Carlos Santos' },
        { message: 'Aumentou a produtividade dos nossos processos.', author: 'Dra. Maria Oliveira' }
      ],
      image: 'assets/images/education-example.png',
      caseStudyLink: '/estudo-de-caso/educacao',
      videoLink: '/videos/demonstrativo-educacao'
    },
  ];
}

