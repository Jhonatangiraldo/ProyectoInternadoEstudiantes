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
var ListaComponent = (function () {
    function ListaComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ListaComponent.prototype.ngOnInit = function () {
        this.permisoAprobado();
        this.permisoNoAprobado();
    };
    ListaComponent.prototype.permisoAprobado = function () {
        var _this = this;
        this.link = 'http://localhost:9000/permisoAprobado';
        this.http.get(this.link)
            .toPromise()
            .then(function (response) { return _this.si(response.json()); });
    };
    ListaComponent.prototype.si = function (json) {
        this.datosSi = json;
        console.log(json);
    };
    ListaComponent.prototype.permisoNoAprobado = function () {
        var _this = this;
        this.link = 'http://localhost:9000/permisoNoAprobado';
        this.http.get(this.link)
            .toPromise()
            .then(function (response) { return _this.no(response.json()); });
    };
    ListaComponent.prototype.no = function (json) {
        this.datosNo = json;
        console.log(json);
    };
    ListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'permisos.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ListaComponent);
    return ListaComponent;
}());
exports.ListaComponent = ListaComponent;
//# sourceMappingURL=app.listaPermisos.js.map