// Crea una funcion que reciba unknown y convierta a mayusculas solamente cuando el valor sea string.
// Requisitos
// - Usa typeof.
// - Devuelve un mensaje cuando no sea string.
// Ejemplo de ejecucion
// HOLA
// Objetivo
// Practicar narrowing sobre unknown.
// Pista
// Comprueba el tipo antes de usar toUpperCase

export{}

function foo(val:unknown) {
    if (typeof(val) === 'string') {
        return val.toUpperCase()
    }
}