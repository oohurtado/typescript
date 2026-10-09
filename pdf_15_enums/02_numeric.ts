// Crea un enum Status con Pending, Approved y Rejected.
// Requisitos
// - Muestra el valor numerico de cada miembro.
// - Declara una variable Status.
// Ejemplo de ejecucion
// Pending: 0 | Approved: 1 | Rejected: 2
// Objetivo
// Comprender enums numericos.
// Pista
// Por defecto comienzan en 0

export{}
enum Status {
    Pending,
    Approved,
    Rejected
}

console.log(`${Status[0]} ${Status.Pending}`)