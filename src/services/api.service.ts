import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CadastroComponent } from '../app/modules/portfolio/pages/cadastro/cadastro.component';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://seu-endpoint-api.com/cadastros'; // Atualize para o URL correto da sua API

  constructor(private http: HttpClient) { }

  montaHeaderToken() {
    const token = localStorage.getItem("jwt");
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };
    return httpOptions;
  }

  // Método para fazer login
  Login(Usuario: any): Observable<any> {
    const apiLoginUrl = 'https://seu-endpoint-api.com/login'; // Defina o URL de login
    return this.http.post<any>(apiLoginUrl, Usuario).pipe(
      tap((Usuario: any) => console.log(`Login realizado com email=${Usuario.email}`)),
      catchError(this.handleError<any>('Login'))
    );
  }

  // Método para obter todos os cadastros
  getCadastro(): Observable<CadastroComponent[]> {
    const httpOptions = this.montaHeaderToken();
    return this.http.get<CadastroComponent[]>(this.apiUrl, httpOptions)
      .pipe(
        tap(() => console.log('Leu os cadastros')),
        catchError(this.handleError<CadastroComponent[]>('getCadastros', []))
      );
  }

  // Método para obter um cadastro por ID
  getCadastroById(id: number): Observable<CadastroComponent> {
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = this.montaHeaderToken();
    return this.http.get<CadastroComponent>(url, httpOptions).pipe(
      tap(() => console.log(`Leu cadastro id=${id}`)),
      catchError(this.handleError<CadastroComponent>(`getCadastro id=${id}`))
    );
  }

  // Método para adicionar um novo cadastro
  addCadastro(cadastro: CadastroComponent): Observable<CadastroComponent> {
    const httpOptions = this.montaHeaderToken();
    return this.http.post<CadastroComponent>(this.apiUrl, cadastro, httpOptions).pipe(
      tap((novoCadastro: CadastroComponent) => console.log(`Adicionou cadastro com id=${novoCadastro.id}`)),
      catchError(this.handleError<CadastroComponent>('addCadastro'))
    );
  }

  // Método para atualizar um cadastro existente
  updateCadastro(id: number, cadastro: CadastroComponent): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = this.montaHeaderToken();
    return this.http.put(url, CadastroComponent, httpOptions).pipe(
      tap(() => console.log(`Atualizou cadastro id=${id}`)),
      catchError(this.handleError<any>('updateCadastro'))
    );
  }

  // Método para deletar um cadastro
  deleteCadastro(id: number): Observable<CadastroComponent> {
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = this.montaHeaderToken();
    return this.http.delete<CadastroComponent>(url, httpOptions).pipe(
      tap(() => console.log(`Deletou cadastro id=${id}`)),
      catchError(this.handleError<CadastroComponent>('deleteCadastro'))
    );
  }

  // Método para lidar com erros
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // Loga o erro no console
      return of(result as T); // Continua o fluxo retornando um valor seguro
    };
  }
}
