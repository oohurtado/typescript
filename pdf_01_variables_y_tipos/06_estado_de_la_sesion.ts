// Crea variables para representar el nombre de un usuario y si tiene una sesion iniciada. Muestra un mensaje
// diferente dependiendo del estado.
// Requisitos- Usa boolean para el estado.- No conviertas el boolean a string manualmente.
// Ejemplo de ejecucion
// Carlos ha iniciado sesion.
// Objetivo
// Practicar booleanos en decisiones.
// Pista
// Un boolean puede utilizarse directamente como condicion

export {};

let nombre: string = "Oscar Hurtado";
let status: boolean = false;

if (status)
    console.log(`${nombre} ha iniciado seion`);
else
    console.log(`${nombre} se encuentra inactivo`);