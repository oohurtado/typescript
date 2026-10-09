// Crea una funcion que reciba unknown y, si es una instancia de Error, muestre su mensaje.
// Requisitos
// - El parametro debe ser unknown.
// - No accedas a message antes de comprobar.
// Ejemplo de ejecucion
// Error: archivo no encontrado
// Objetivo
// Aplicar narrowing seguro sobre unknown.
// Pista
// instanceof Error permite acceder de forma segura a message
export{}
function showError(value: unknown): void {
    if (value instanceof Error) {
        console.log(`Error: ${value.message}`);
    }
}

const error = new Error("archivo no encontrado");

showError(error);