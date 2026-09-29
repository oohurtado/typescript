// Crea un array de precios y encuentra el primer precio mayor a 1000.
// Requisitos- Contempla que podria no existir coincidencia.- No uses any.
// Ejemplo de ejecucion
// Primer precio mayor a 1000: 1250
// Objetivo
// Practicar find y posibles valores undefined.
// Pista
// El resultado de find puede ser undefined.

export {};

let arr:number[] = [200,1001,500]
let found = arr.find(p => p == 10011)

if (found == undefined) 
    console.log(`no encontrado`)
else
    console.log(`encontrado`)