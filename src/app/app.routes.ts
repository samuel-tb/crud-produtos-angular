import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cadastro', component: Produtos },
    { path: 'lista', component: ListaProdutos },
    { path: '**', redirectTo: '' } // Redirecionamento de segurança
];
