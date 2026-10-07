// Crea Product y ShoppingCart. El carrito debe almacenar productos.
// Requisitos
// - Permite agregar productos.
// - Permite listar productos.
// - Calcula el total.
// Ejemplo de ejecucion
// Productos: 3 | Total: $4700
// Objetivo
// Practicar colaboracion entre clases.
// Pista
// Una clase puede contener instancias de otra

class ShoppingCart {

    constructor(private products:Product[]) {        
    }

    public add(product: Product) {
        this.products.push(product)
    }

    public list() {
        this.products.forEach(p => console.log(`${p.getDetails()}`))
    }

    public total() {
        let sum = 0;

        this.products.reduce((_, product) => {
            sum += product.getPrice();
            return _;
        }, 0);

        console.log(`Productos: ${this.products.length} | Total: ${sum}`);
    }
}

class Product {

    constructor(
        private name:string,
        private price: number
    ) {}

    public getDetails() {
        return `${this.name} ${this.price}`
    }

    public getPrice() {
        return this.price
    }
}

let sc = new ShoppingCart([])
sc.add(new Product('teclado', 500))
sc.add(new Product('monitor', 5100))
sc.list()
sc.total()