import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule, // Importando ReactiveFormsModule aqui
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
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
      console.log(this.cadastroForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    }
  }
}
