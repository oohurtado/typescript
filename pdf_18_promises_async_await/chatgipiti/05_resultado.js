"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promesaA = Promise.resolve('Operación exitosa');
promesaA
    .then(function (resultado) {
    console.log('Cumplida:', resultado);
})
    .catch(function (error) {
    console.error('Rechazada:', error);
});
// Salida esperada:
// Cumplida: Operación exitosa
var promesaB = Promise.reject('Operación fallida');
promesaB
    .then(function (resultado) {
    console.log('Cumplida:', resultado);
})
    .catch(function (error) {
    console.error('Rechazada:', error);
});
// Salida esperada:
// Rechazada: Operación fallida
