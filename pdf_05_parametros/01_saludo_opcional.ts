// Crea una funcion que reciba un nombre obligatorio y un apellido opcional.
// Requisitos
// - El nombre debe ser string.
// - El apellido debe poder omitirse.
// - Devuelve el saludo como string.
// Ejemplo de ejecucion
// Hola, Oscar
// Hola, Oscar Hurtado
// Objetivo
// Practicar parametros opcionales.
// Pista
// Un parametro opcional se marca con ?
export{};
function hi(firstname:string, lastname?:string) : string {
    if (lastname === undefined) {
        return `Hola, ${firstname}`
    }

    return `Hola, ${firstname} ${lastname}`
}

console.log(hi('oscar', 'hurtado'))
console.log(hi('oscar'))