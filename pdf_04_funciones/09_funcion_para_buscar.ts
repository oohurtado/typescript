// Crea una funcion que reciba un array de numeros y un numero a buscar. Devuelve true si existe.
// Requisitos- El array debe estar tipado.- El retorno debe ser boolean.
// Ejemplo de ejecucion
// Existe 25: true
// Objetivo
// Combinar funciones y arrays.
// Pista
// Puedes usar un metodo de busqueda del array

export {};

function findNumber(arr:number[], n:number) : boolean {
    let found = arr.find(p => p == n);
    return found !== undefined
}

let arr:number[] = [1,2,3,4,5];
console.log(findNumber(arr,3))
console.log(findNumber(arr,7))