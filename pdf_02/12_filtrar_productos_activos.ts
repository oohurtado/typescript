// Define un tipo o interface Product con id, name y price. Crea un array de productos.
// Requisitos- Agrega al menos cuatro productos.- Muestra nombre y precio de cada uno.
// Ejemplo de ejecucion
// Mouse - $400
// Monitor - $3500
// Objetivo
// Practicar arrays de objetos tipados.
// Pista
// El tipo del array puede expresarse como Product[]

// interface Persona {
//   nombre: string;
//   edad: number;
//   saludar(): void;
// }


interface Product {
    id: string;
    name: string;
    price: number;
    active: boolean;
}

let products:Product[] = [{
    id: "123",
    name: "teclado",
    price: 9.99,
    active: true
    }, {
        id: "234",
        name: "mouse",
        price: 5.55,
        active: false
    }, {
        id: "345",
        name: "cpu",
        price: 45.99,
        active: true
    }, {
        id: "456",
        name: "monitor",
        price: 20.29,
        active: false
    }]

    products = products.filter(p => p.active)

    products.forEach(p => {
        console.log(`${p.name} - $${p.price}`)
    });

    export {};