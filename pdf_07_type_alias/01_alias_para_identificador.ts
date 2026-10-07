// Crea un type alias llamado UserId que represente un identificador numerico.
// Requisitos
// - Declara una variable usando UserId.
// - Asigna un valor valido.
// - No uses any.
// Ejemplo de ejecucion
// ID: 100
// Objetivo
// Practicar la sintaxis basica de type aliases.
// Pista
// Un alias se declara con la palabra type
export{};
type UserId = number|string

let id:UserId;
id = 1
id = 'hola'
console.log(id)