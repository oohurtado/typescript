"use strict";
// Crea un array de productos con nombre, precio y cantidad. Calcula el subtotal de cada producto y el total del
// carrito.
// Requisitos
// - Usa objetos tipados.
// - Usa operaciones sobre arrays.
// - No uses any.
// Ejemplo de ejecucion
// Teclado x2: $1700
// Mouse x1: $400
// Total: $2100
// Objetivo
// Integrar arrays, objetos y calculos.
// Pista
// Puedes transformar cada producto o acumular directamente el total
let products = [];
products.push(['teclado', 250, 5]);
products.push(['mouse', 150, 7]);
let total = 0;
products.forEach(p => {
    let subtotal = p[1] * p[2];
    total += subtotal;
    console.log(`- ${p[0]} x ${p[2]}: $${subtotal}`);
});
console.log(total);
