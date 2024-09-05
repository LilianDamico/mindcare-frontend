import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-encarte2',
  standalone: true,
  imports: [NgFor], 
  templateUrl: './encarte2.component.html',
  styleUrls: ['./encarte2.component.scss']
})
export class Encarte2Component {
  features = [
    {
      icon: '🛠️',
      title: 'A integração entre profissionais da saúde, seus pacientes e familiares',
      description: 'MindCare possibilita a interação dos interessados diretamente',
      link: '/funcionalidade1'
    },
    {
      icon: '⚙️',
      title: 'Alertas',
      description: 'Partindo de uma agenda pessoal do paciente, os iteressados podem gerenciar horários e posologia de medicamentos',
      link: '/funcionalidade2'
    },
    {
      icon: '🔒',
      title: 'Agendamento de consultas',
      description: 'Por meio do portal MindCare, o paciente encontra profissionais e agenda suas consultas e exames',
      link: '/funcionalidade3'
    }
  ];
}
