import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { routing,
appRoutingProviders }   from './app.routing';
import { LoginComponent } from './login/app.login';
import { PeticionComponent } from './peticion/app.peticion';
import { ListaComponent } from './listaPermisos/app.listaPermisos';
import { PermisoComponent } from './permiso/app.permiso';
import { RegistroComponent } from './registro/app.registro';


@NgModule({
  imports:      [ 
  			BrowserModule, 
  			FormsModule,
        HttpModule,
        routing
        	],

  declarations: [ 
  			AppComponent,
  			LoginComponent,
  			PeticionComponent,
        ListaComponent,
        PermisoComponent,
        RegistroComponent
  			],
        
 providers: [ appRoutingProviders ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }