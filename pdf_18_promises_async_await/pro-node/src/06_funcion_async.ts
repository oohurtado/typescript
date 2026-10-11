// Crea una funcion async que devuelva un saludo.
// Requisitos
// - Declara correctamente el tipo de retorno.
// - Consume la funcion con await o then.
// Ejemplo de ejecucion
// Hola, TypeScript
// Objetivo
// Introducir funciones async.
// Pista
// Una funcion async siempre devuelve una Promise

export async function sayHi(name: string): Promise<string> {
    return `Hola, ${name}`;
}