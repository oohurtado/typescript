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
class Customer {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `${this.id} ${this.name}`;
    }
}
class Product {
    id;
    name;
    stock;
    price;
    constructor(id, name, stock, price) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDetails() {
        return `${this.id} - ${this.name} - ${this.price}`;
    }
}
class ProductOrder {
    quantity;
    product;
    productId;
    productName;
    productPrice;
    constructor(quantity, product) {
        this.quantity = quantity;
        this.product = product;
        if (product === undefined) {
            throw Error("Producto incorrecto");
        }
        this.productId = product.getId();
        this.productName = product.getName();
        this.productPrice = product.getPrice();
    }
}
class Order {
    id;
    status;
    customer;
    producst;
    constructor(id, status, customer, producst) {
        this.id = id;
        this.status = status;
        this.customer = customer;
        this.producst = producst;
    }
    getDetails() {
        console.log(`OrderId: ${this.id} | OrderStatus: ${this.status} | Cliente: ${this.customer?.getDetails()}`);
        products.forEach(p => {
            console.log(`${p.getDetails()}`);
        });
    }
}
////////////////////////////////////////////////////////////////////////
let products = [
    new Product(123, 'teclado', 10, 250),
    new Product(234, 'mouse', 5, 560),
    new Product(345, 'monitor', 3, 5499)
];
let c1 = new Customer(1, 'oscar hurtado');
let c2 = new Customer(2, 'nahara brizuela');
let p1 = products.find(p => p.getId() == 123);
let p2 = products.find(p => p.getId() == 234);
let p3 = products.find(p => p.getId() == 345);
let po1 = [
    new ProductOrder(3, p1),
    new ProductOrder(1, p2),
    new ProductOrder(2, p3)
];
let po2 = [
    new ProductOrder(1, p1),
    new ProductOrder(1, p2)
];
let orders = [
    new Order(1, 'paid', c1, po1),
    new Order(2, 'pending', c2, po2)
];
// productos en orden
// total por orden
// total
orders.forEach(p => {
    p.getDetails();
});
export {};
