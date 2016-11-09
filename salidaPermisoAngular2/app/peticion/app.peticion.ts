import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Component({
  moduleId: module.id,
  templateUrl: 'peticion.html'
})
export class PeticionComponent implements OnInit{
	nombre:string;
	fechaSalida:string;
	horaSalida:string;
	horaLlegada:string;
	motivo:string;
	link:string;

	constructor(private http: Http,
				private router: Router) { }

	ngOnInit() { }

	pedir(){
		this.link = 'http://localhost:9000/peticion/'+this.nombre+'/'+this.fechaSalida+'/'+this.horaSalida+'/'
					+this.horaLlegada+'/'+this.motivo;
	    	console.log(this.link);
	   		this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.activar(response.json()));

	}

	activar(json){
    	if (json.usuario == "Ok"){
    		alert("Peticion Guardada");
    	}else{
    		alert("Peticion no Guardada");
    	}
    }
}