// Crea un enum Priority cuyos valores comiencen en 1.
// Requisitos
// - Low debe valer 1.
// - Los siguientes pueden incrementarse automaticamente.
// Ejemplo de ejecucion
// Low: 1 | Medium: 2 | High: 3
// Objetivo
// Practicar valores numericos iniciales.
// Pista
// Puedes asignar manualmente el primer valor

export {}

enum Priority {
    Low = 1,
    Medium = 2,
    High = 3
}

console.log(`${Priority[1]} ${Priority.Low}`)