// Crea una variable estado que solamente pueda contener pending, approved o rejected.
// Requisitos- No uses string como tipo general.- Cambia el estado al menos dos veces.
// Ejemplo de ejecucion
// Estado actual: approved
// Objetivo
// Practicar tipos literales.
// Pista
// Los literales permiten restringir exactamente los valores validos
let estado = "pending";
console.log(`Estado actual: ${estado}`);
estado = "approved";
console.log(`Estado actual: ${estado}`);
estado = "rejected";
console.log(`Estado actual: ${estado}`);
export {};
// estado = "lol" error
