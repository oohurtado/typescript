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

export {};

class Product {

    constructor(
        public name: string,
        public price: number
    ) {}    
}

let products: Product[] = []
products.push(new Product('teclado', 100))
products.push({name:'mouse',price:200})

products.forEach(p => console.log(`${p.name} $${p.price}`))