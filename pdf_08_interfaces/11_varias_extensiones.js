// Define Identifiable y Auditable. Crea Product extendiendo ambas.
// Requisitos
// - Identifiable contiene id.
// - Auditable contiene createdAt y updatedAt.
// - Product agrega name y price.
// Ejemplo de ejecucion
// Producto 1 - Creado: 2026-01-10
// Objetivo
// Combinar contratos reutilizables.
// Pista
// Una interface puede extender mas de una interface
let p = {
    id: 1,
    name: 'teclado',
    price: 399,
    createdAt: '2024-12-21',
    updatedAt: '2025-09-01'
};
function foo(product) {
    console.log(product);
}
foo(p);
export {};
