// Crea una funcion que reciba User | null y devuelva el nombre si existe usuario.
// Requisitos
// - Comprueba null antes de acceder a propiedades.
// - Devuelve un mensaje alternativo.
// Ejemplo de ejecucion
// Usuario no encontrado
// Objetivo
// Practicar narrowing con null.
// Pista
// Compara el valor antes de acceder al objeto

export{};
function foo(val: string|null) {
    if (val !== null) {
        console.log(val)
    }
}

foo('jaja')
foo(null)