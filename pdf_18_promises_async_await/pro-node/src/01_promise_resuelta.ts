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

export const promise01 = new Promise<string>((resolve, reject) => {
    resolve('Operacion exitosa')
});