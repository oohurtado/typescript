// Dada una lista de productos con precio y stock, calcula cuantos productos existen, cuantos tienen stock y cual
// es el valor total del inventario.
// Requisitos
// - Usa objetos tipados.
// - No uses any.
// - Calcula el valor como precio por stock.
// Ejemplo de ejecucion
// Productos: 6 | Con stock: 5 | Valor total: $24500
// Objetivo
// Integrar objetos, arrays y calculos.
// Pista
// Divide cada calculo en pasos claros

class Product {

    constructor(
        private name:string,
        private price:number,
        private stock:number,
    ) {}

    public getPrice() {
        return this.price
    }

    public getStock() {
        return this.stock
    }
}

let products: Product[] = [
    new Product('teclado', 250, 4),
    new Product('mouse', 500, 2),
    new Product('monitor', 5000, 2)
]

let total:number = 0
let stock:number = 0
products.forEach(p => {
    stock += p.getStock()
    total += (p.getStock() * p.getPrice());
});

console.log(`Productos: ${products.length} | Stock: ${stock} | Total: ${total}`)

export {};