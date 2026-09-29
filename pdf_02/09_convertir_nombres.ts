// Dado un array de nombres en minusculas, crea otro con todos en mayusculas.
// Requisitos- No modifiques directamente el array original.- El nuevo array debe conservar la misma cantidad de elementos.
// Ejemplo de ejecucion
// ANA, LUIS, MARIA
// Objetivo
// Practicar transformacion de arrays.
// Pista
// Revisa map().

export {};

let arr1:string[] = ["ana", "luis", "maria"]
let arr2:string[] = []
let arr:number[] = []

arr2 = arr1.map((word:string): string => {
    return word.toUpperCase()
})


console.log(arr1)
console.log(arr2)

arr = arr1.map((word:string): number => {
    return word.length;
})
console.log(arr)
arr = arr2.map(x => x.length)
console.log(arr)
