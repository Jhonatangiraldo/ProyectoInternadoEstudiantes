"use strict";
var router_1 = require('@angular/router');
var app_login_1 = require('./login/app.login');
var app_peticion_1 = require('./peticion/app.peticion');
var app_listaPermisos_1 = require('./listaPermisos/app.listaPermisos');
var app_permiso_1 = require('./permiso/app.permiso');
var app_registro_1 = require('./registro/app.registro');
app_listaPermisos_1.ListaComponent;
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: app_login_1.LoginComponent },
    { path: 'peticion', component: app_peticion_1.PeticionComponent },
    { path: 'lista', component: app_listaPermisos_1.ListaComponent },
    { path: 'permiso/:id', component: app_permiso_1.PermisoComponent },
    { path: 'registro', component: app_registro_1.RegistroComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map