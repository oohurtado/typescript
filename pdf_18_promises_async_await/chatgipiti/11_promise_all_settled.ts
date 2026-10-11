/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

const resultados = await Promise.allSettled([
  Promise.resolve("Usuario obtenido"),
  Promise.reject(new Error("Falló la consulta")),
  Promise.resolve("Productos obtenidos")
]);

console.log(resultados);