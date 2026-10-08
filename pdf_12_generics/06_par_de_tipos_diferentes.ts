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

function foo<T,S>(x:T, y:S): [x:T, y:S] {
    return [x,y]
}

export {};

console.log(foo<number,boolean>(1,true))
console.log(foo<string,number>('a',2))
console.log(foo<boolean,string>(false,'b'))