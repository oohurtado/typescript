// Crea una funcion que reciba string | null | undefined y determine si hay texto disponible.
// Requisitos
// - Usa una comprobacion de truthiness.
// - Considera tambien string vacio.
// Ejemplo de ejecucion
// No hay texto
// Objetivo
// Practicar truthiness narrowing.
// Pista
// Recuerda que una cadena vacia tambien es falsy

export{};

function foo(val?:string|null|undefined) {
    if (val) {
        console.log(val)
    }
}

foo('hola')
foo('')
foo(null)
foo(undefined)
foo('adios')
