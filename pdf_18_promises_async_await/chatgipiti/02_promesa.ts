/// <reference lib="es2015.promise" />

export {}; // Evita conflictos de nombres en el ámbito global
const promesa = new Promise((resolve, reject) => {
    resolve('Operación completada');
});

console.log(promesa);

// salida esperada: 
// Promise { 'Operación completada' }