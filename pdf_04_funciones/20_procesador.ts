// Crea funciones separadas para trabajar con una lista de pedidos. Cada pedido contiene id, status y una lista de
// items con price y quantity.
// Requisitos
// - Crea una funcion para calcular el total de un pedido.
// - Crea una funcion para buscar un pedido por id.
// - Crea una funcion para filtrar pedidos por status.
// - Crea una funcion para calcular el total vendido.
// - Crea una funcion que reciba otra funcion para aplicar una operacion sobre los pedidos.
// - Tipa parametros y retornos.
// - No uses any.
// - Evita depender de variables globales.
// Ejemplo de ejecucion
// Pedido 1001: $2100
// Pedidos pagados: 3
// Total vendido: $7800
// Objetivo
// Integrar funciones, objetos, arrays, callbacks y tipos de retorno.
// Pista
// Divide cada responsabilidad en una funcion pequena y reutilizable

export {};

type Status = "paid" | "pending" | "cancelled";

type Item = {
    price: number;
    quantity: number;
};

type Order = {
    id: number;
    status: Status;
    items: Item[];
};

const orders: Order[] = [
    {
        id: 1001,
        status: "paid",
        items: [
            { price: 1000, quantity: 2 },
            { price: 100, quantity: 1 }
        ]
    },
    {
        id: 1002,
        status: "paid",
        items: [
            { price: 1500, quantity: 1 },
            { price: 300, quantity: 1 }
        ]
    },
    {
        id: 1003,
        status: "pending",
        items: [
            { price: 500, quantity: 2 }
        ]
    },
    {
        id: 1004,
        status: "paid",
        items: [
            { price: 2000, quantity: 1 }
        ]
    }
];

function calculateOrderTotal(order: Order): number {
    return order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

function findOrderById(
    orders: Order[],
    id: number
): Order | undefined {
    return orders.find(order => order.id === id);
}

function filterOrdersByStatus(
    orders: Order[],
    status: Status
): Order[] {
    return orders.filter(order => order.status === status);
}

function calculateTotalSold(orders: Order[]): number {
    const paidOrders = filterOrdersByStatus(orders, "paid");

    return paidOrders.reduce(
        (total, order) => total + calculateOrderTotal(order),
        0
    );
}

function applyOperation(
    orders: Order[],
    operation: (order: Order) => number
): number[] {
    return orders.map(order => operation(order));
}

const order = findOrderById(orders, 1001);

if (order) {
    console.log(
        `Pedido ${order.id}: $${calculateOrderTotal(order)}`
    );
}

const paidOrders = filterOrdersByStatus(orders, "paid");

console.log(`Pedidos pagados: ${paidOrders.length}`);

console.log(`Total vendido: $${calculateTotalSold(orders)}`);

const totals = applyOperation(orders, calculateOrderTotal);

console.log(totals);