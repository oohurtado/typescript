// Crea una funcion que reciba string | undefined y muestre el texto solo cuando exista.
// Requisitos
// - No uses as.
// - Maneja undefined.
// Ejemplo de ejecucion
// Sin valor
// TypeScript
// Objetivo
// Practicar narrowing mediante comprobacion de existencia.
// Pista
// Una condicion puede eliminar undefined del tipo
function foo(val) {
    if (val !== undefined) {
        console.log(val);
    }
}
foo('hola');
foo(undefined);
export {};
