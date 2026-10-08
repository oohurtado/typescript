// Crea una funcion identity que reciba un valor y devuelva exactamente el mismo tipo.
// Requisitos
// - Debe funcionar con string, number y boolean.
// - No uses any.
// Ejemplo de ejecucion
// identity(10) -> 10
// identity('hola') -> hola
// Objetivo
// Introducir funciones genericas.
// Pista
// Usa un parametro de tipo T
function foo(val) {
    return val;
}
console.log(foo('oscar'));
console.log(foo(911));
export {};
