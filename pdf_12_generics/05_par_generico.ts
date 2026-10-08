// Crea un tipo generico Pair que almacene dos valores del mismo tipo.
// Requisitos
// - Crea Pair y Pair.
// - Muestra ambos valores.
// Ejemplo de ejecucion
// [10, 20]
// [TypeScript, Angular]
// Objetivo
// Introducir type aliases genericos.
// Pista
// El parametro de tipo puede utilizarse varias veces

function pair<T>(x:T, y:T) : [x:T, y:T] {
    return [x,y]
}

console.log(pair(2,3))
console.log(pair('2','3'))