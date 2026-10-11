"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resultado = await Promise.race([
    new Promise(function (resolve) {
        return setTimeout(function () { return resolve("Consulta A"); }, 2000);
    }),
    new Promise(function (resolve) {
        return setTimeout(function () { return resolve("Consulta B"); }, 1000);
    })
]);
console.log(resultado);
