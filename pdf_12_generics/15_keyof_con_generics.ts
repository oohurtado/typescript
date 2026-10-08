// Crea una funcion getProperty que reciba un objeto y una clave valida de ese objeto.
// Requisitos
// - No permitas claves inexistentes.
// - Prueba con User y Product.
// Ejemplo de ejecucion
// Nombre: Teclado
// Objetivo
// Introducir keyof junto con generics.
// Pista
// La clave puede restringirse a keyof T.

export {};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
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
    name: "Oscar",
    age: 43
};

const product: Product = {
    id: 200,
    name: "Teclado",
    price: 500
};

console.log(`Nombre: ${getProperty(product, "name")}`);
console.log(`Edad: ${getProperty(user, "age")}`);

// Error: "description" no existe en Product
// getProperty(product, "description");