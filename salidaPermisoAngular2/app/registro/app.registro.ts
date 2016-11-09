import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Component({
  moduleId: module.id,
  templateUrl: 'registro.html'
})
export class RegistroComponent implements OnInit{
	usuario:string;
	password:string;
	password2:string;
	rol:string;
	link:string;

	constructor(private http: Http,
				private router: Router) { }

	ngOnInit() { }

	registrar(){
		console.log(this.usuario+" "+this.password+" "+this.password2+" "+this.rol);
	}

	guardar(){
		if (this.password == this.password2){
	    	this.link = 'http://localhost:9000/registro/'+this.usuario+'/'+this.password+'/'+this.rol;
	    	console.log(this.link);
	   		this.http.get(this.link)
	    						.toPromise()
	    						.then(response => this.activar(response.json()));
	    }else{
	    	alert("Digite contraseñas concordantes");
	    }
    }

    activar(json){
    	if (json.usuario == "Ok"){
    		alert("Registro Guardado");
    		this.router.navigate(["/lista"]);
    	}else{
    		alert("Registro no guardado");
    	}
    }
}