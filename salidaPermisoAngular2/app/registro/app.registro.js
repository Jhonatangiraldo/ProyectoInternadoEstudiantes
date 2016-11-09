"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var RegistroComponent = (function () {
    function RegistroComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    RegistroComponent.prototype.ngOnInit = function () { };
    RegistroComponent.prototype.registrar = function () {
        console.log(this.usuario + " " + this.password + " " + this.password2 + " " + this.rol);
    };
    RegistroComponent.prototype.guardar = function () {
        var _this = this;
        if (this.password == this.password2) {
            this.link = 'http://localhost:9000/registro/' + this.usuario + '/' + this.password + '/' + this.rol;
            console.log(this.link);
            this.http.get(this.link)
                .toPromise()
                .then(function (response) { return _this.activar(response.json()); });
        }
        else {
            alert("Digite contraseñas concordantes");
        }
    };
    RegistroComponent.prototype.activar = function (json) {
        if (json.usuario == "Ok") {
            alert("Registro Guardado");
            this.router.navigate(["/lista"]);
        }
        else {
            alert("Registro no guardado");
        }
    };
    RegistroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'registro.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=app.registro.js.map