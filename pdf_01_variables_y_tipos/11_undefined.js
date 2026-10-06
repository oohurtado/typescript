// Representa un numero de telefono que todavia puede no haber sido asignado.
// Requisitos- La variable debe aceptar string o undefined.- Comprueba su valor antes de mostrarlo.
// Ejemplo de ejecucion
// Telefono no registrado.
// Objetivo
// Practicar undefined y comprobaciones previas.
// Pista
// Antes de usar un valor posiblemente undefined, verifica que exista.
// let telefono:string|undefined
let telefono = "911";
if (telefono === undefined)
    console.log("telefono no definido");
else
    console.log(`telefono: ${telefono}`);
export {};
