// Crea un producto y genera una nueva version cambiando solamente precio y disponibilidad.
// Requisitos
// - Mantiene id y nombre.
// - No reconstruyas manualmente todas las propiedades si no es necesario.
// Ejemplo de ejecucion
// Precio anterior: $1000 | Precio nuevo: $900
// Objetivo
// Practicar actualizaciones inmutables.
// Pista
// El spread operator permite conservar propiedades existentes.

export{};

const producto1 = {
    id: 1,
    nombre: 'teclado',
    precio: 1000,
    disponible: true
};

const producto2 = {
    ...producto1,
    precio: 900,
    disponible: false
};

console.log(producto1)
console.log(producto2)