/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

async function obtenerNumero() {
  return 10;
}

async function foo() {
    console.log("Antes de obtener el número");
    await obtenerNumero()
        .then(P => console.log(P));
    console.log("Después de obtener el número");
}

foo();

// salida: 
// Antes de obtener el número
// 10
// Después de obtener el número