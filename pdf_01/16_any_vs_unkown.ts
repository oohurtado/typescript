// Crea dos variables, una de tipo any y otra de tipo unknown. Asigna valores distintos y compara como
// TypeScript permite trabajar con cada una.
// Requisitos- Incluye comentarios explicando la diferencia observada.- Evita convertir unknown sin comprobar su tipo.
// Ejemplo de ejecucion
// Revisa los comentarios del codigo.
// Objetivo
// Entender por que unknown suele ser mas seguro que any.
// Pista
// any desactiva gran parte de las comprobaciones de tipos

export {};

let valorAny: any = "Hola";
let valorUnknown: unknown = 100;

// ANY:
// TypeScript permite usar el valor prácticamente sin comprobar su tipo.
console.log(valorAny.toUpperCase());

// También podemos cambiar completamente el tipo.
valorAny = 50;
console.log(valorAny * 2);

// UNKNOWN:
// Sabemos que contiene algo, pero TypeScript no nos deja usarlo
// como number hasta comprobar primero su tipo.
if (typeof valorUnknown === "number") {
    console.log(valorUnknown * 2);
}

// Cambiamos el valor.
valorUnknown = "TypeScript";

// Nuevamente debemos comprobar el tipo antes de usar
// operaciones propias de string.
if (typeof valorUnknown === "string") {
    console.log(valorUnknown.toUpperCase());
}

// Diferencia:
// any permite trabajar con el valor sin verificar su tipo.
// unknown obliga a comprobar el tipo antes de utilizarlo.
// Por eso unknown es más seguro que any.