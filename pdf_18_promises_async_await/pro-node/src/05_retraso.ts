// Crea una funcion delay que devuelva Promise y se resuelva despues de un tiempo.
// Requisitos
// - Usa setTimeout dentro de la Promise.
// - El tiempo se recibe como parametro.
// Ejemplo de ejecucion
// Esperando...
// Terminado
// Objetivo
// Comprender operaciones asincronas simuladas.
// Pista
// Envuelve setTimeout dentro de una Promise

export function delay(tiempo: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, tiempo);
    });
}
