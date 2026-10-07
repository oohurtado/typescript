// Define un alias Product con id, name y price.
// Requisitos
// - Crea varios productos.
// - Guarda los productos en un array tipado.
// Ejemplo de ejecucion
// 1 - Teclado - $850
// Objetivo
// Reutilizar estructuras de objetos.
// Pista
// Puedes usar Product[] para una coleccion
let products = [];
products.push({ id: 1, name: 'teclado', price: 399 });
products.push({ id: 2, name: 'monitor', price: 4999 });
products.forEach(p => {
    console.log(`${p.id} ${p.name} ${p.price}`);
});
export {};
