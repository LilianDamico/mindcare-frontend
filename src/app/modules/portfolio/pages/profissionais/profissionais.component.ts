import { Component } from '@angular/core';
import { CadastroComponent } from "../../components/cadastro/cadastro.component";
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importar o HttpClientModule

@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule // Adicionar HttpClientModule aqui
  ],
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.scss']
})
export class ProfissionaisComponent {}
