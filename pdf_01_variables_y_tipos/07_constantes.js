// Representa el nombre de una aplicacion, su version actual y el limite maximo de usuarios mediante valores que
// no deban reasignarse.
// Requisitos- Usa const.- Asigna tipos adecuados.- Muestra los valores.
// Ejemplo de ejecucion
// LearnApp v1.0 - Maximo: 100 usuarios
// Objetivo
// Distinguir entre let y const.
// Pista
// Si una referencia no sera reasignada, normalmente puede declararse con const.
const app = "LearnApp";
const version = "v1.0";
const limit = 100;
console.log(`${app} ${version} - Maximo: ${limit} usuarios`);
export {};
