import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ReactiveFormsModule, // Importando ReactiveFormsModule para o formulário reativo
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  contatoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', [Validators.required, Validators.minLength(3)]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
      // Aqui você pode adicionar a lógica para enviar a mensagem de contato
    }
  }
}
