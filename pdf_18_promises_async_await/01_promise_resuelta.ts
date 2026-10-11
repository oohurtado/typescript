// Crea una Promise que se resuelva con el mensaje Operacion completada.
// Requisitos
// - Tipa explicitamente la Promise.
// - Consume el resultado con then.
// Ejemplo de ejecucion
// Operacion completada
// Objetivo
// Introducir Promise y resolve.
// Pista
// El tipo generico indica el valor que entrega la Promise

/// <reference lib="es2015.promise" />
export{}

let promise = new Promise<string>((resolve, reject) => {
    resolve('operacion completada')
});

promise.then(p => console.log(p))