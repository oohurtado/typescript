// Crea una variable que represente la fecha de ultimo acceso de un usuario. Inicialmente puede no existir.
// Requisitos- Permite almacenar un string o null.- Primero asigna null y despues una fecha.
// Ejemplo de ejecucion
// Ultimo acceso: 2026-09-28
// Objetivo
// Practicar valores que pueden ser null.
// Pista
// Usa un union type para representar mas de una posibilidad

let fecha:string|null = null

if (fecha === null)
    console.log("null!!!!!!!!!!!!")

console.log(`fecha: ${fecha}`)
fecha = "2026-09-28"
console.log(`fecha: ${fecha}`)

export {};