"use strict";
// Crea una funcion que reciba id, nombre y precio y devuelva un objeto Product.
// Requisitos
// - Define el tipo de retorno.
// - No uses any.
// Ejemplo de ejecucion
// Producto creado: Mouse - $450
// Objetivo
// Practicar objetos como valores de retorno.
// Pista
// La funcion debe construir y devolver el objeto

export {};

function createProduct(id, nombre, precio) {
    return { id, nombre, precio };
}
let p = createProduct(1, 'p', 1);
console.log(p);
