// Crea una lista de productos representados inicialmente por nombres y comprueba si uno existe.
// Requisitos- La busqueda debe devolver un resultado booleano.- Prueba con un producto existente y otro inexistente.
// Ejemplo de ejecucion
// Teclado existe: true
// Camara existe: false
// Objetivo
// Practicar busquedas sencillas.
// Pista
// Revisa includes().

export {};

let products:string[] = ["teclado", "mouse", "monitor"]

let resultTeclado:string = products.includes('teclado') ? 'si' : 'no'
console.log(`teclado: ${resultTeclado}`)

let resultAuto:string = products.includes('auto') ? 'si' : 'no'
console.log(`auto: ${resultAuto}`)