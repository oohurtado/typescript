// Declara una variable que pueda recibir un valor cuyo tipo todavia no conoces. Asigna diferentes valores y
// verifica su tipo antes de utilizarlo.
// Requisitos- Usa unknown.- Comprueba el tipo antes de realizar una operacion especifica.
// Ejemplo de ejecucion
// El valor recibido es un numero: 25
// Objetivo
// Practicar unknown de forma segura.
// Pista
// typeof permite estrechar el tipo antes de trabajar con el valor
let some;
some = 25;
console.log(typeof (some));
some = "hola";
console.log(typeof (some));
export {};
