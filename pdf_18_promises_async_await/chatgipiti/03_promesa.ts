/// <reference lib="es2015.promise" />

const promesa = new Promise((resolve, reject) => {
    resolve('Hola desde una Promise');
});

promesa.then((resultado) => {
    console.log(resultado);
});

console.log('Fin del programa');

// Salida esperada:
// Fin del programa
// Hola desde una Promise



export {}; // Evita conflictos de nombres en el ámbito global