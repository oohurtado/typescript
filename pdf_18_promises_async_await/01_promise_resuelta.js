"use strict";
// Crea una Promise que se resuelva con el mensaje Operacion completada.
// Requisitos
// - Tipa explicitamente la Promise.
// - Consume el resultado con then.
// Ejemplo de ejecucion
// Operacion completada
// Objetivo
// Introducir Promise y resolve.
// Pista
// El tipo generico indica el valor que entrega la Promise
Object.defineProperty(exports, "__esModule", { value: true });
var promise = new Promise(function (resolve, reject) {
    return 'operacion completada';
});
promise.then(function (p) { return console.log(p); });
