// Crea una Promise que devuelva un numero.
// Requisitos
// - Usa resolve.
// - Multiplica el resultado por dos en then.
// Ejemplo de ejecucion
// Resultado: 20
// Objetivo
// Practicar Promises tipadas.
// Pista
// El valor recibido en then conserva el tipo de la Promise.

/// <reference lib="es2015.promise" />
export{}

let promise = new Promise<number>((resolve, reject) => {
    resolve(20)
});

promise.then(p => console.log(p))