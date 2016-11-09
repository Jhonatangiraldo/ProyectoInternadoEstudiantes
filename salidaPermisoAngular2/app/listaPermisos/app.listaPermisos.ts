import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'


@Component({
  moduleId: module.id,
  templateUrl: 'permisos.html'
})
export class ListaComponent implements OnInit {

	datosNo:string;
	datosSi:string;
    link:string

    constructor(private http: Http,
				private router: Router) { }

    ngOnInit() {
    	this.permisoAprobado();
    	this.permisoNoAprobado();
    }
	
	permisoAprobado(){
		this.link = 'http://localhost:9000/permisoAprobado';
    	this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.si(response.json()));
    }

    si(json){
    	this.datosSi = json;
    	console.log(json);
    }    	

    permisoNoAprobado(){
		this.link = 'http://localhost:9000/permisoNoAprobado';
    	this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.no(response.json()));
    }

    no(json){
    	this.datosNo = json;
    	console.log(json);
    }
}

