// Define un type alias para representar operaciones matematicas que reciben dos numeros y devuelven un
// numero.
// Requisitos
// - Crea funciones de suma, resta y multiplicacion usando ese tipo.
// - No repitas innecesariamente la firma.
// Ejemplo de ejecucion
// Suma: 8 | Resta: 2 | Multiplicacion: 15
// Objetivo
// Practicar tipos reutilizables para funciones.
// Pista
// Un type alias puede describir la firma completa de una funcion
function magic(a, b, operation) {
    return operation(a, b);
}
console.log(magic(4, 2, (a, b) => a + b));
console.log(magic(4, 2, (a, b) => a - b));
export {};
