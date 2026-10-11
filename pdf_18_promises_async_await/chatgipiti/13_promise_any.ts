/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

const resultado = await Promise.any([
  Promise.reject(new Error("Servidor A falló")),
  new Promise(resolve =>
    setTimeout(() => resolve("Servidor B respondió"), 1000)
  ),
  new Promise(resolve =>
    setTimeout(() => resolve("Servidor C respondió"), 2000)
  )
]);

console.log(resultado);