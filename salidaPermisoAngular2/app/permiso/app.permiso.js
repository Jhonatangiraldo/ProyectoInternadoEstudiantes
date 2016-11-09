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
var PermisoComponent = (function () {
    function PermisoComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    PermisoComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.consultar();
    };
    PermisoComponent.prototype.consultar = function () {
        var _this = this;
        this.link = 'http://localhost:9000/individual/' + this.id;
        this.http.get(this.link)
            .toPromise()
            .then(function (response) { return _this.capturar(response.json()); });
    };
    PermisoComponent.prototype.capturar = function (json) {
        /*this.datos = json;
        console.log(this.datos.nombrePersona);
        this.nombre = this.datos.nombrePersona;
        this.fecha = this.datos.fecha;
        this.horaSalida = this.datos.horaSalida;
        this.horaLlegada = this.datos.horaLlegada;
        this.motivo = this.datos.motivo;
        this.estado = this.datos.estado;*/
    };
    PermisoComponent.prototype.aprobar = function () {
        var _this = this;
        this.link = "http://localhost:9000/aprobar/" + this.id;
        this.http.get(this.link)
            .toPromise()
            .then(function (response) { return _this.aprobado(response.json()); });
    };
    PermisoComponent.prototype.aprobado = function (json) {
        alert("Se ha aprobado");
        this.router.navigate(["/lista"]);
    };
    PermisoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'permiso.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, http_1.Http])
    ], PermisoComponent);
    return PermisoComponent;
}());
exports.PermisoComponent = PermisoComponent;
//# sourceMappingURL=app.permiso.js.map