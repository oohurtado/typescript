// Construye una coleccion de pedidos. Cada pedido debe tener id, customer, status y una lista de items. Cada
// item debe tener product, price y quantity.
// Requisitos
// - Crea al menos tres pedidos.
// - Calcula el total de cada pedido.
// - Obtiene pedidos por status.
// - Busca un pedido por id.
// - Calcula el total vendido considerando solamente pedidos paid.
// - No uses any.
// - Usa objetos anidados y arrays tipados.
// Ejemplo de ejecucion
// Pedido 1001 - Total: $2100
// Pedidos pagados: 2
// Total vendido: $4800
// Objetivo
// Integrar objetos, objetos anidados, arrays, tipos restringidos y calculos.
// Pista
// Modela primero cada estructura por separado antes de construir los pedidos

export {};

class Customer {
    constructor(
        private readonly id: number,
        private name: string
    ) { }

    public getDetails() {
        return `${this.id} ${this.name}`
    }
}

class Product {
    constructor(
        private readonly id: number,
        private name:string,
        private stock:number,
        private price:number,
    ) {}

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getPrice() {
        return this.price;
    }

    public getDetails() {
        return `${this.id} - ${this.name} - ${this.price}`
    }
}

class ProductOrder {

    private productId: number;
    private productName: string;
    private productPrice: number;

    constructor(
        private quantity: number,
        private product?: Product,
    ) {
        if (product === undefined) {
            throw Error("Producto incorrecto")
        }

        this.productId = product.getId();
        this.productName = product.getName();
        this.productPrice = product.getPrice()
    }
}

type OrderStatus = 'paid' |'pending'
class Order {
    constructor(
        private readonly id: number,
        private status: OrderStatus,
        private customer?: Customer,
        private producst?: ProductOrder[],
    ) {}

    public getDetails() {
        console.log(`OrderId: ${this.id} | OrderStatus: ${this.status} | Cliente: ${this.customer?.getDetails()}`)        
        products.forEach(p => {
            console.log(`${p.getDetails()}`)
        })
    }
}

////////////////////////////////////////////////////////////////////////

let products: Product[] = [
    new Product(123, 'teclado', 10, 250),
    new Product(234, 'mouse', 5, 560),
    new Product(345, 'monitor', 3, 5499)
]

let c1 = new Customer(1, 'oscar hurtado');
let c2 = new Customer(2, 'nahara brizuela');

let p1 = products.find(p => p.getId() == 123)
let p2 = products.find(p => p.getId() == 234)
let p3 = products.find(p => p.getId() == 345)
let po1: ProductOrder[] = [
    new ProductOrder(3, p1),
    new ProductOrder(1, p2),
    new ProductOrder(2, p3)
];
let po2: ProductOrder[] = [
    new ProductOrder(1, p1),
    new ProductOrder(1, p2)    
];

let orders: Order[] = [
    new Order(1, 'paid', c1, po1),
    new Order(2, 'pending', c2, po2)
]

// productos en orden
// total por orden
// total

orders.forEach(p => {
    p.getDetails()
});