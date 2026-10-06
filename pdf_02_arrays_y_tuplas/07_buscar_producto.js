// Crea una lista de productos representados inicialmente por nombres y comprueba si uno existe.
// Requisitos- La busqueda debe devolver un resultado booleano.- Prueba con un producto existente y otro inexistente.
// Ejemplo de ejecucion
// Teclado existe: true
// Camara existe: false
// Objetivo
// Practicar busquedas sencillas.
// Pista
// Revisa includes().
let products = ["teclado", "mouse", "monitor"];
let resultTeclado = products.includes('teclado') ? 'si' : 'no';
console.log(`teclado: ${resultTeclado}`);
let resultAuto = products.includes('auto') ? 'si' : 'no';
console.log(`auto: ${resultAuto}`);
export {};
