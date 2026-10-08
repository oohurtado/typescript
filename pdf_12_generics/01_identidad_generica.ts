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

export {};

function foo<T>(val: T) : T {
    return val
}

console.log(foo<string>('oscar'))
console.log(foo<number>(911))