// Crea una lista de productos con una propiedad active y genera una nueva lista con solamente los activos.
// Requisitos
// - No modifiques la lista original.
// - Conserva el tipo de los productos.
// Ejemplo de ejecucion
// Productos activos: 4
// Objetivo
// Practicar filtrado de objetos.
// Pista
// La condicion puede utilizar directamente una propiedad booleana

export {};

class Product {
    constructor(
        private name: string,
        private active: boolean
    ) {}

    getStatus = () => this.active;
}

let products: Product[] = [
    new Product('teclado', true),
    new Product('mouse', true),
    new Product('monitor', false)
];

let pActivos = products.filter(p => p.getStatus())
let pNoActivos = products.filter(p => !p.getStatus())

console.log(pActivos)
console.log(pNoActivos)