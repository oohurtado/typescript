// Dado un array de estudiantes con nombre y calificacion, genera dos arrays: aprobados y reprobados.
// Requisitos
// - Define el criterio de aprobacion en una constante.
// - Ambos resultados deben conservar el tipo de estudiante.
// - Muestra cuantos hay en cada grupo.
// Ejemplo de ejecucion
// Aprobados: 4 | Reprobados: 2
// Objetivo
// Practicar multiples filtros sobre datos tipados.
// Pista
// Un mismo array puede filtrarse con condiciones diferentes.

export {};

const calificacion:number = 6.0
let estudiantes: [nombre:string,calificacion:number][] = []
estudiantes.push(['oscar', 6.1])
estudiantes.push(['nay', 9.9])
estudiantes.push(['luis',4.5])
let apr:number = estudiantes.filter(p => p[1] >= calificacion).length
let rep:number = estudiantes.filter(p => p[1] < calificacion).length
console.log(`Aprobados: ${apr} | Reprobados: ${rep}`)