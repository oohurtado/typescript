// Crea un alias MathOperation para una funcion que reciba dos numeros y devuelva un numero.
// Requisitos- Usa el alias para suma, resta y multiplicacion.- No repitas la firma completa.
// Ejemplo de ejecucion
// Suma: 8 | Resta: 2 | Multiplicacion: 15
// Objetivo
// Practicar aliases de funciones.
// Pista
// Un alias puede describir la firma de una funcion

export{};
type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

console.log(
    `Suma: ${sum(5, 3)} | Resta: ${subtract(5, 3)} | Multiplicacion: ${multiply(3, 5)}`
);