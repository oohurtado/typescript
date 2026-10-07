// Crea una funcion que reciba un mensaje y una cantidad de repeticiones con valor por defecto de 1.
// Requisitos
// - El mensaje es obligatorio.
// - La cantidad debe ser number.
// - Muestra el mensaje tantas veces como corresponda.
// Ejemplo de ejecucion
// Hola
// Hola
// Hola
// Objetivo
// Practicar parametros por defecto en operaciones repetitivas.
// Pista
// Usa un ciclo basado en la cantidad recibida
function mensaje(msg, veces = 1) {
    for (let i = 0; i < veces; i++) {
        console.log(msg);
    }
}
mensaje('hola', 3);
mensaje('adios');
export {};
