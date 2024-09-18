import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AlertaComponent } from './modules/portfolio/components/alerta/alerta.component'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ], 
  template: `
    
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
