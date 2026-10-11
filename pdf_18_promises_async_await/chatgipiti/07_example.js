"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validarEdad(edad) {
    return new Promise(function (resolve, reject) {
        if (edad >= 18) {
            resolve('Registro permitido');
        }
        else {
            reject(new Error('Debes ser mayor de edad'));
        }
    });
}
validarEdad(20)
    .then(function (mensaje) { return console.log(mensaje); })
    .catch(function (error) { return console.log(error.message); });
