/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

function obtenerNumero() {
    return Promise.resolve(25);
}

async function calcular() {
    const numero = await obtenerNumero();

    console.log(numero);
}

calcular();

// salida: 25