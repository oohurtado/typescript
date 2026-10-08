// Crea una funcion generica que devuelva el ultimo elemento de un array.
// Requisitos
// - Debe conservar el tipo de los elementos.
// - No uses tipos concretos.
// Ejemplo de ejecucion
// Ultimo: 50
// Objetivo
// Reforzar funciones genericas.
// Pista
// El indice final depende de length

export{};

function foo<T>(arr: T[]): T|undefined{
    if (arr.length > 0) {
        return arr[arr.length-1]
    } else {
        return undefined
    }
}

console.log(foo<number>([1,2,3,4,5]))
console.log(foo<string>(['a','e','i','o','u']))