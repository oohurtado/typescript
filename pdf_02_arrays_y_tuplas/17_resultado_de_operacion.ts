// Crea una funcion que devuelva una tupla con un boolean y un mensaje para indicar el resultado de una
// operacion.
// Requisitos
// - El primer elemento indica exito.
// - El segundo contiene el mensaje.
// - Prueba un caso exitoso y uno fallido.
// Ejemplo de ejecucion
// [true, Operacion completada]
// Objetivo
// Usar tuplas como valores de retorno.
// Pista
// Declara explicitamente el tipo de retorno

export {};

function someMethod(b:boolean, s:string): [boolean, string] {
    return [b, s]
}

console.log(someMethod(true, 'ok'))
console.log(someMethod(false, 'error'))