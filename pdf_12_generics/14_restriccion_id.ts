// Crea una funcion getId que acepte cualquier objeto que tenga una propiedad id.
// Requisitos- Prueba con User y Product.- Los demas campos pueden variar.
// Ejemplo de ejecucion
// ID: 100
// Objetivo
// Practicar restricciones estructurales.
// Pista
// T puede extender una interface pequena con id.

export {};

interface HasId {
    id: number;
}

function getId<T extends HasId>(item: T): number {
    return item.id;
}

interface User {
    id: number;
    name: string;
    age: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

const user: User = {
    id: 100,
    name: "Ana",
    age: 25
};

const product: Product = {
    id: 200,
    name: "Teclado",
    price: 500
};

console.log(`ID: ${getId(user)}`);
console.log(`ID: ${getId(product)}`);
