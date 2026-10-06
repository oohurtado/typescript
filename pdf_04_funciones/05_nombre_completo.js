"use strict";
// Crea una funcion que reciba nombre y apellido y devuelva el nombre completo.
// Requisitos
// - Ambos parametros deben ser string.
// - Devuelve un string.
// Ejemplo de ejecucion
// Nombre completo: Laura Garcia
// Objetivo
// Practicar composicion de strings mediante funciones.
// Pista
// Puedes utilizar template strings
export{};
function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
console.log(nombreCompleto('oscar', 'hurtado'));
