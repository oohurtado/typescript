// Crea una funcion que acepte solamente valores que tengan una propiedad length.
// Requisitos- Debe funcionar con string y arrays.- No debe aceptar number directamente.
// Ejemplo de ejecucion
// Longitud: 10
// Objetivo
// Introducir generic constraints.
// Pista
// Usa extends con una estructura que tenga length.

export {};

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

console.log(`Longitud: ${getLength("Hola mundo")}`);
console.log(`Longitud: ${getLength([10, 20, 30])}`);

// Error: number no tiene la propiedad length
// getLength(12345);