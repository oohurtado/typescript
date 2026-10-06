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
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
function foo(product) {
    console.log(product);
}
let p = new Product('teclado', 349);
foo(p);
export {};
