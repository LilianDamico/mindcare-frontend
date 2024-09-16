import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importando CommonModule para usar *ngIf
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,  // Importando ReactiveFormsModule
    CommonModule,         // Importando CommonModule para diretivas como *ngIf e *ngFor
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  id: any;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      id: [{ value: '', disabled: true }], // Campo ID adicionado e desabilitado por padrão
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      endereco: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      profissao: ['', Validators.required],
      especialidade: ['', Validators.required],
      comentarios: ['']
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const cadastroData = this.cadastroForm.getRawValue(); // Pega os valores do formulário, incluindo o ID desabilitado
      console.log(cadastroData);
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    }
  }
}

export interface CadastroComponentData {
  id: number;
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
  profissao: string;
  especialidade: string;
  comentarios?: string;
}
