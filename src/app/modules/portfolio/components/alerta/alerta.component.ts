import { Component } from '@angular/core';

@Component({
  selector: 'app-alerta-construcao',
  standalone: true,
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent {
  
  fecharAlerta() {
    const alertaModal = document.getElementById('alertaModal');
    if (alertaModal) {
      alertaModal.style.display = 'none';
    }
  }
}
