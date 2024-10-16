import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../../models/cadastro.model'; 

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'https://mindcare-vert.vercel.app/'; 

  constructor(private http: HttpClient) {}

  
  getAllCadastros(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(`${this.apiUrl}`);
  }

  
  getCadastroById(id: string): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${this.apiUrl}/${id}`);
  }

  
  registerCadastro(cadastro: Cadastro): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, cadastro);
  }

  
  updateCadastro(id: string, cadastro: Cadastro): Observable<Cadastro> {
    return this.http.put<Cadastro>(`${this.apiUrl}/${id}`, cadastro);
  }

  
  deleteCadastro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
