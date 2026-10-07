// Define un tipo Size con small, medium y large. Crea una funcion que devuelva un numero segun el tamano.
// Requisitos
// - Cada literal debe producir un valor diferente.
// - Maneja todos los casos.
// Ejemplo de ejecucion
// medium -> 32
// Objetivo
// Relacionar literales con comportamiento.
// Pista
// Puedes usar switch.

export{};
type Size = 'small' | 'medium' | 'large'

function foo(n:number): Size {
    if (n < 33) {
        return 'small'
    }
    if (n < 66) {
        return 'medium'
    }
    return 'large'
}

console.log(foo(20))
console.log(foo(50))
console.log(foo(90))