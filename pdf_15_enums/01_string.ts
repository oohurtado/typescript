// Crea un enum Day con los dias de la semana y declara una variable usando uno de sus valores.
// Requisitos
// - Usa enum.
// - Muestra el valor seleccionado.
// Ejemplo de ejecucion
// Dia seleccionado: Monday
// Objetivo
// Introducir la sintaxis de enum.
// Pista
// Los miembros numericos reciben valores automaticamente si no los especificas

export{}
enum Day {
    Sunday = "sun",
    Monday = "mon",
    Tuesday = "tue",
    Wednesday = "wed",
    Thursday = "thu",
    Friday = "fri",
    Saturday = "sat"
}

console.log(Day.Friday)