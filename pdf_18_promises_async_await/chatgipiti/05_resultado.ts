/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

const promesaA = Promise.resolve('Operación exitosa');

promesaA
    .then((resultado) => {
        console.log('Cumplida:', resultado);
    })
    .catch((error) => {
        console.error('Rechazada:', error);
    });

// Salida esperada:
// Cumplida: Operación exitosa

const promesaB = Promise.reject('Operación fallida');

promesaB
    .then((resultado) => {
        console.log('Cumplida:', resultado);
    })
    .catch((error) => {
        console.error('Rechazada:', error);
    });

// Salida esperada:
// Rechazada: Operación fallida