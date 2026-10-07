// Crea una funcion que reciba boolean | string y genere una descripcion apropiada.
// Requisitos
// - Distingue ambos tipos.
// - Tipa el retorno como string.
// Ejemplo de ejecucion
// true -> Activado
// manual -> manual
// Objetivo
// Reforzar narrowing.
// Pista
// Comprueba el tipo antes de usar operaciones especificas.
function foo(val) {
    if (typeof (val) === 'boolean') {
        return val ? 'Activado' : 'Desactivado';
    }
    else {
        return 'Manual';
    }
}
console.log(foo(true));
console.log(foo(false));
console.log(foo('true'));
export {};
