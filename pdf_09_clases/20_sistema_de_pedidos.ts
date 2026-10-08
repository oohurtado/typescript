// Construye Customer, Product, OrderItem, Order y OrderService.
// Requisitos
// - Customer representa al cliente.
// - Product contiene id, name, price y stock.
// - OrderItem relaciona producto y cantidad.
// - Order calcula su total.
// - OrderService crea y administra pedidos.
// - Al crear un pedido valida stock.
// - Descuenta stock cuando corresponda.
// - Permite buscar pedidos por cliente y estado.
// - No uses any.
// Ejemplo de ejecucion
// Pedido 1001 creado
// Cliente: Laura
// Total: $4800
// Estado: pending
// Objetivo
// Integrar varias clases, responsabilidades, colecciones y reglas de negocio.
// Pista
// Define claramente que responsabilidad pertenece a cada clase

export {};

class Product{
    constructor(
        private id: number,
        private name: string,
        private price: number,
        private stock: number,
    ) {}
} 

class Customer {
    constructor(
        private id: number,
        private name: string
    ) {}
}


class OrderItem {
    constructor(
        private product: Product,
        private quantity: number,
    ) {}
}

class Order {
    constructor(
        private orderItems: OrderItem[],
        private customer: Customer
    ) {}
}

class OrderService {
    private products: Product[]
    private customers: Customer[]
    private orders: Order[]

    constructor() {        
        this.products = []
        this.customers = []
        this.orders = []
    }

    addProduct(id:number, name:string, price:number, stock:number) {
        this.products.push(new Product(id,name,price,stock))
    }
    
    /*
        crud products
        crud customers
        create order
        calculate order total
    */
}