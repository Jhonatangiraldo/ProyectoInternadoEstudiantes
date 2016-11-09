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
var PeticionComponent = (function () {
    function PeticionComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    PeticionComponent.prototype.ngOnInit = function () { };
    PeticionComponent.prototype.pedir = function () {
        var _this = this;
        this.link = 'http://localhost:9000/peticion/' + this.nombre + '/' + this.fechaSalida + '/' + this.horaSalida + '/'
            + this.horaLlegada + '/' + this.motivo;
        console.log(this.link);
        this.http.get(this.link)
            .toPromise()
            .then(function (response) { return _this.activar(response.json()); });
    };
    PeticionComponent.prototype.activar = function (json) {
        if (json.usuario == "Ok") {
            alert("Peticion Guardada");
        }
        else {
            alert("Peticion no Guardada");
        }
    };
    PeticionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'peticion.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], PeticionComponent);
    return PeticionComponent;
}());
exports.PeticionComponent = PeticionComponent;
//# sourceMappingURL=app.peticion.js.map