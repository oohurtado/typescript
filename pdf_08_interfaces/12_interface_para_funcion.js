// Define una interface Formatter que represente una funcion que recibe string y devuelve string.
// Requisitos
// - Crea un formatter de mayusculas.
// - Crea otro que agregue un prefijo.
// Ejemplo de ejecucion
// HOLA
// [INFO] mensaje
// Objetivo
// Practicar interfaces callable.
// Pista
// Una interface puede describir la firma de una funcion
const uppercase = (text) => text.toUpperCase();
const addPrefix = (text) => `[INFO] ${text}`;
console.log(uppercase("hola"));
console.log(addPrefix("mensaje"));
export {};
