"use strict";
/// <reference lib="es2015.promise" />
Object.defineProperty(exports, "__esModule", { value: true });
var promesa = new Promise(function (resolve, reject) {
    resolve('Hola desde una Promise');
});
promesa.then(function (resultado) {
    console.log(resultado);
});
console.log('Fin del programa');
