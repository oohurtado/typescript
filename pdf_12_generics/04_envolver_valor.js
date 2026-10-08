// Crea una funcion wrap que reciba un valor y devuelva un array que contenga ese valor.
// Requisitos
// - Debe funcionar con cualquier tipo.
// - El retorno debe mantener el tipo.
// Ejemplo de ejecucion
// wrap(5) -> [5]
// Objetivo
// Practicar transformaciones genericas simples.
// Pista
// Si entra T, el resultado puede ser T[]
function foo(val) {
    let arr = [];
    arr.push(val);
    return arr;
}
console.log(foo(5));
console.log(foo('s'));
export {};
