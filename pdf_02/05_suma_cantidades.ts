// Guarda varias cantidades en un array y calcula la suma total.
// Requisitos- No escribas la suma manualmente.- Recorre todos los numeros.
// Ejemplo de ejecucion
// Total: 1250
// Objetivo
// Practicar acumulacion sobre arrays.
// Pista
// Usa una variable acumuladora o reduce
let data:number[] = [1,2,3,4,5]
let total: number = 0;
data.forEach(p => total += p);
console.log(`${total}`)