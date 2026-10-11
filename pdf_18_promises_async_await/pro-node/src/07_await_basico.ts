// Crea una funcion getNumber que devuelva Promise y otra funcion async que espere el resultado.
// Requisitos
// - Usa await.
// - Realiza un calculo despues de esperar.
// Ejemplo de ejecucion
// Resultado: 30
// Objetivo
// Practicar await.
// Pista
// await obtiene el valor resuelto de una Promise

function getNumber(): Promise<number> {
    return Promise.resolve(10);
}

async function calculate(): Promise<void> {
    let number: number = await getNumber();

    let result: number = number * 3;

    console.log(`Resultado: ${result}`);
}

export { calculate }