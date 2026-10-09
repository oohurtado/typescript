// Crea una funcion que reciba unknown y devuelva el doble cuando sea number.
// Requisitos
// - Usa typeof.
// - Maneja valores que no sean number.
// Ejemplo de ejecucion
// 10 -> 20
// Objetivo
// Reforzar el uso seguro de unknown.
// Pista
// No necesitas una assertion si el narrowing es suficiente
function foo(val) {
    if (typeof (val) === "number") {
        console.log(val * 2);
    }
    else {
        console.log('meh');
    }
}
foo(911);
export {};
