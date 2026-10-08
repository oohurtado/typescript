// Crea Pair para almacenar dos valores de tipos diferentes.
// Requisitos
// - Crea pares string-number y number-boolean.
// - No uses any.
// Ejemplo de ejecucion
// [Edad, 28]
// [1, true]
// Objetivo
// Practicar multiples parametros genericos.
// Pista
// Puedes declarar mas de un parametro de tipo
function foo(x, y) {
    return [x, y];
}
console.log(foo(1, true));
console.log(foo('a', 2));
console.log(foo(false, 'b'));
export {};
