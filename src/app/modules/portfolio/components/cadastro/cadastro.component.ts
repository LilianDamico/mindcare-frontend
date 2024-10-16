import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../../services/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit { 
  cadastroForm: FormGroup;
  isEdit: boolean = false;
  cadastroId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private route: ActivatedRoute
  ) {
    this.cadastroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      regis: ['', Validators.required],
      adress: ['', Validators.required],
      fone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      prof: ['', Validators.required],
      especialidade: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      coments: ['']
    });
  }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.cadastroId = id;
        this.cadastroService.getCadastroById(id).subscribe(cadastro => {
          this.cadastroForm.patchValue(cadastro);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const cadastro = this.cadastroForm.value;

      if (this.isEdit && this.cadastroId) {
        this.cadastroService.updateCadastro(this.cadastroId, cadastro)
          .subscribe(() => {
            alert('Cadastro atualizado com sucesso!');
          });
      } else {
        this.cadastroService.registerCadastro(cadastro)
          .subscribe(() => {
            alert('Cadastro realizado com sucesso!');
            this.cadastroForm.reset();
          });
      }
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }

  onDelete(): void {
    if (this.isEdit && this.cadastroId) {
      this.cadastroService.deleteCadastro(this.cadastroId)
        .subscribe(() => {
          alert('Cadastro deletado com sucesso!');
          this.cadastroForm.reset();
          this.isEdit = false;
          this.cadastroId = null;
        });
    }
  }
}
