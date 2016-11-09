import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/app.login';
import { PeticionComponent } from './peticion/app.peticion';
import { ListaComponent } from './listaPermisos/app.listaPermisos';
import { PermisoComponent } from './permiso/app.permiso';
import { RegistroComponent } from './registro/app.registro';

ListaComponent

const appRoutes: Routes = [
    { path: '', redirectTo:'/login', pathMatch : 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'peticion', component: PeticionComponent},
    { path: 'lista', component: ListaComponent},
    { path: 'permiso/:id', component: PermisoComponent},
    { path: 'registro', component: RegistroComponent}
];

export const appRoutingProviders: any[] = [

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);