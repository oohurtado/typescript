"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resultados = await Promise.allSettled([
    Promise.resolve("Usuario obtenido"),
    Promise.reject(new Error("Falló la consulta")),
    Promise.resolve("Productos obtenidos")
]);
console.log(resultados);
