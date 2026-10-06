// Crea un array con al menos cinco productos tipados.
// Requisitos
// - Todos deben compartir la misma estructura.
// - Muestra nombre y precio de cada producto.
// Ejemplo de ejecucion
// Teclado - $850
// Mouse - $400
// Objetivo
// Combinar objetos con arrays.
// Pista
// Define una sola estructura reutilizable para todos los productos
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let products = [];
products.push(new Product('teclado', 100));
products.push({ name: 'mouse', price: 200 });
products.forEach(p => console.log(`${p.name} $${p.price}`));
export {};
