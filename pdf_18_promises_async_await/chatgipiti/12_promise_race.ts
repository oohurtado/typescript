/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

const resultado = await Promise.race([
  new Promise(resolve =>
    setTimeout(() => resolve("Consulta A"), 2000)
  ),
  new Promise(resolve =>
    setTimeout(() => resolve("Consulta B"), 1000)
  )
]);

console.log(resultado);