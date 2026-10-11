// Crea una Promise que pueda ser rechazada y maneja el error con catch.
// Requisitos
// - Usa reject.
// - Muestra un mensaje de error.
// Ejemplo de ejecucion
// Error: operacion fallida
// Objetivo
// Practicar rechazo de Promises.
// Pista
// catch permite manejar una Promise rechazada

const promise03 = new Promise<void>((resolve, reject) => {
    reject(new Error('aqui va el error'))
});

export { promise03 }