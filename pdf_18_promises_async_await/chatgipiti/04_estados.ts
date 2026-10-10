/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Datos recibidos');
    }, 2000);
});

console.log('Consulta iniciada');

promesa.then((resultado) => {
    console.log(resultado);
});

console.log('Consulta en proceso');

// salida esperada:
// Consulta iniciada
// Consulta en proceso
// Datos recibidos