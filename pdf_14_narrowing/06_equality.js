// Crea una funcion que reciba string | number y otro parametro string. Si ambos son iguales, trabaja con el primer
// valor como string.
// Requisitos
// - Usa una comparacion de igualdad adecuada.
// - Explica mediante comentario por que se estrecha el tipo.
// Ejemplo de ejecucion
// Los valores coinciden: hola
// Objetivo
// Practicar equality narrowing.
// Pista
// La comparacion puede aportar informacion sobre ambos operandos
function procesar(x, y) {
    if (x === y) {
        // Si x es igual a y, la única posibilidad es que ambos sean 'string'
        console.log(x.toUpperCase()); // ✅ TypeScript sabe que x es string
        console.log(y.toLowerCase()); // ✅ TypeScript sabe que y es string
    }
    else {
        console.log(x); // x sigue siendo string | number
        console.log(y); // y sigue siendo string | boolean
    }
}
procesar('a', 'a');
procesar('a', 'b');
procesar('a', true);
export {};
