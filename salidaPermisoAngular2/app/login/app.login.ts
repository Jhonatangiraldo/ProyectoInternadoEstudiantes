import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'


@Component({
  moduleId: module.id,
  templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
	private datos = "inicial";
	usuario:string;
	password:string;
	link:string;
	constructor(private http: Http,
				private router: Router) { }

    ngOnInit() { }

    verificar(){
    	this.link = 'http://localhost:9000/login/'+this.usuario+'/'+this.password;
    	console.log(this.link);
   		this.http.get(this.link)
    						.toPromise()
    						.then(response => this.activar(response.json()));
    }

    activar(json){
    	if (json.rol == 1){
    		this.router.navigate(["/lista"]);
    	}else if(json.rol == 2){
    		this.router.navigate(["/peticion"]);
    	}else{
    		alert("Digite usuario y contraseña correcta");
    	}
    }
}