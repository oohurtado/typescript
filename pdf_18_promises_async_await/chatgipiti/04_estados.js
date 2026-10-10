"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Datos recibidos');
    }, 2000);
});
console.log('Consulta iniciada');
promesa.then(function (resultado) {
    console.log(resultado);
});
console.log('Consulta en proceso');
