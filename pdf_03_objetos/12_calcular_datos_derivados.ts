// Crea un objeto de producto con price y quantity y calcula su subtotal.
// Requisitos
// - No guardes manualmente el subtotal inicial.
// - Calculalo usando las propiedades.
// Ejemplo de ejecucion
// Producto: Teclado | Subtotal: $1700
// Objetivo
// Distinguir datos almacenados de datos calculados.
// Pista
// El subtotal se obtiene a partir de otras propiedades

export{};

class Product {
    constructor(
        private name: string,
        private price: number,
        private quantity: number
    ) {}

    getName = () => this.name

    getSubTotal = () => this.price * this.quantity
}

let products: Product[] = [
    new Product('Teclado', 20, 350),
    new Product('Mouse', 250, 8),
    new Product('Monitor', 5600, 3)
]

products.forEach(p => {
    console.log(`${p.getName()} $${p.getSubTotal()}`)
})