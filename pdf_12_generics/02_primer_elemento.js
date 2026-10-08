"use strict";
// Crea una funcion generica que reciba un array y devuelva su primer elemento.
// Requisitos
// - Prueba con number[] y string[].
// - Contempla un array vacio.
// Ejemplo de ejecucion
// Primero: TypeScript
// Objetivo
// Practicar generics con arrays.
// Pista
// El retorno puede ser T o undefined

export{};
function foo(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return undefined;
    }
}
console.log(foo([1, 2, 3, 4, 5]));
console.log(foo(['a', 'e', 'i', 'o', 'u']));
