// Crea una variable que pueda contener string o number. Segun su tipo, muestra el texto en mayusculas o
// calcula su doble.
// Requisitos- Usa typeof.- Debe funcionar para ambas posibilidades.
// Ejemplo de ejecucion
// Entrada: hola -> HOLA | Entrada: 10 -> 20
// Objetivo
// Practicar type narrowing con typeof.
// Pista
// Despues de comprobar typeof, TypeScript conoce un tipo mas especifico
//let x:string|number = 10;
let x = "hola";
if (typeof (x) === "string") {
    console.log(String(x).toUpperCase());
}
if (typeof (x) === "number") {
    console.log(Number(x) * 2);
}
export {};
