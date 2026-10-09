// Crea una funcion que reciba string | number. Si es string, conviertelo a mayusculas; si es number, calcula su
// doble.
// Requisitos
// - Usa typeof.
// - No uses type assertions.
// Ejemplo de ejecucion
// hola -> HOLA
// 10 -> 20
// Objetivo
// Practicar narrowing con typeof.
// Pista
// Comprueba el tipo antes de usar operaciones especificas

export{};
function foo(val: string|number) {
    if (typeof(val) === 'string') {
        console.log(val.toUpperCase())
    } else {
        console.log(val * 2)
    }
}

foo('hola')
foo(2)