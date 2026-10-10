/// <reference lib="es2015.promise" />
var promesa = new Promise(function (resolve, reject) {
    resolve('Operación completada');
});
console.log(promesa);
export {}; // Evita conflictos de nombres en el ámbito global

// salida esperada: 
// Promise { 'Operación completada' }