import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',  
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'precios',  
        loadComponent: () => import('./taxi/precios-list/precios-list.component').then(m => m.PreciosListComponent)
    }    
];
