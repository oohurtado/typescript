// Representa mediante variables los datos principales de un empleado: id, nombre, salario, activo y segundo
// nombre opcional.
// Requisitos- El segundo nombre puede no existir.- No uses any.- Muestra una descripcion completa.
// Ejemplo de ejecucion
// 101 - Laura Garcia - $18000 - Activa
// Objetivo
// Integrar tipos basicos, unions y valores opcionales.
// Pista
// Piensa que tipo necesita cada dato antes de escribir el codigo.

let id:string = "435435";
let nombre:string = "Oscar";
let salario:number = 19000;
let activo:boolean = true;
let apellido:string|null = 'Hurtado'

if (apellido == null) {
    console.log(`${id} - ${nombre} - $${salario} - ${activo ? 'Activo' : 'No activo'}`)
} else {
    console.log(`${id} - ${nombre} ${apellido} - $${salario} - ${activo ? 'Activo' : 'No activo'}`)
}

export {};