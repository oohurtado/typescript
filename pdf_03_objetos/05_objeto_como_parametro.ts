
// Crea una funcion que reciba un producto y muestre su informacion.
// Requisitos
// - El parametro debe estar tipado.
// - No declares cada dato como parametro separado.
// Ejemplo de ejecucion
// Mouse - $450
// Objetivo
// Practicar objetos como parametros de funciones.
// Pista
// La funcion puede recibir directamente un objeto completo

export {};

class Product {
    constructor(
        private name: string,
        private price: number
    ) {}
}

function foo(product: Product) {
    console.log(product)
}

let p = new Product('teclado', 349);
foo(p)