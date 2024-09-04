import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { AboutComponent } from './modules/portfolio/pages/about/about.component';
import { ContatoComponent } from './modules/portfolio/pages/contato/contato.component';
import { CadastroComponent } from './modules/portfolio/pages/cadastro/cadastro.component';
import { LoginComponent } from './modules/portfolio/pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'contato',
        component: ContatoComponent
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    {
        path: 'login',
        component: LoginComponent
    }
];
