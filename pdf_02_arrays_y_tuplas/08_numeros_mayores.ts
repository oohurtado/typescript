// Dado un array de numeros, genera otro con solamente los mayores a 100.
// Requisitos- No modifiques el array original.- El resultado debe seguir siendo number[].
// Ejemplo de ejecucion
// Resultado: 150, 220, 300
// Objetivo
// Practicar filtrado.
// Pista
// Revisa filter()

let numsA:number[] = [50,150,45,540]
let numsB:number[] = []

numsB = numsA.filter(p => p >= 100)

console.log(numsA)
console.log(numsB)