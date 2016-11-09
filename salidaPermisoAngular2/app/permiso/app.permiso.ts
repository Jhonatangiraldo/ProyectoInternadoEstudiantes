import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'


@Component({
  moduleId: module.id,
  templateUrl: 'permiso.html'
})
export class PermisoComponent implements OnInit {
	constructor(private route: ActivatedRoute,
    			private router: Router,
    			private http: Http) {}
 /* public datos.nombrePersona;
  public datos.fecha;
  public datos.horaSalida;
  public datos.horaSalida;
  public datos.horaLlegada;
  public datos.motivo;
  public datos.estado;*/
	public id:number;
	public nombre:string;
	public fecha:string;
	public horaSalida:string;
	public horaLlegada:string;
	public motivo:string;
	public estado:string;
  public link:string;

    ngOnInit() { 
    	this.id = this.route.snapshot.params['id'];
    	this.consultar();
   	}

   	consultar(){
   		this.link = 'http://localhost:9000/individual/'+this.id;
    	this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.capturar(response.json()));

   	}

   	capturar(json){
   		/*this.datos = json;
   		console.log(this.datos.nombrePersona);
   		this.nombre = this.datos.nombrePersona;
   		this.fecha = this.datos.fecha;
   		this.horaSalida = this.datos.horaSalida;
   		this.horaLlegada = this.datos.horaLlegada;
   		this.motivo = this.datos.motivo;
   		this.estado = this.datos.estado;*/

   	}

   	aprobar(){
   		this.link = "http://localhost:9000/aprobar/"+ this.id;
   		this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.aprobado(response.json()));
   	}

   	aprobado(json){
   		alert("Se ha aprobado");
   		this.router.navigate(["/lista"]);
   	}

}