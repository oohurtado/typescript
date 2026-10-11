"use strict";
// Crea una Promise que devuelva un numero.
// Requisitos
// - Usa resolve.
// - Multiplica el resultado por dos en then.
// Ejemplo de ejecucion
// Resultado: 20
// Objetivo
// Practicar Promises tipadas.
// Pista
// El valor recibido en then conserva el tipo de la Promise.
Object.defineProperty(exports, "__esModule", { value: true });
var promise = new Promise(function (resolve, reject) {
    resolve(20);
});
promise.then(function (p) { return console.log(p); });
