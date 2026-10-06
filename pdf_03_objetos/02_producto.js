// Crea un objeto producto con id, nombre, precio y disponible.
// Requisitos
// - Usa number, string y boolean.
// - Muestra una descripcion del producto.
// Ejemplo de ejecucion
// 10 - Teclado - $850 - Disponible: true
// Objetivo
// Reforzar propiedades con diferentes tipos.
// Pista
// Cada propiedad puede tener un tipo diferente
class Product {
    id;
    nombre;
    precio;
    disponible;
    constructor(id, nombre, precio, disponible) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    str() {
        return `${this.id} ${this.nombre} - Disponible: ${this.disponible ? 'si' : 'no'}`;
    }
}
let teclado = new Product(123, 'teclado', 300, true);
console.log(`${teclado.str()}`);
export {};
