// Crea una Promise que devuelva un numero.
// Requisitos
// - Usa resolve.
// - Multiplica el resultado por dos en then.
// Ejemplo de ejecucion
// Resultado: 20
// Objetivo
// Practicar Promises tipadas.
// Pista
// El valor recibido en then conserva el tipo de la Promise

export const promise02 = new Promise<number>((resolve,reject) => {
    resolve(20)
});