/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global    

function obtenerUsuario() {
  return Promise.resolve({ id: 1, nombre: "Ana" });
}

function obtenerProductos() {
  return Promise.resolve(["Laptop", "Mouse"]);
}

async function ejecutar() {
  const [usuario, productos] = await Promise.all([
    obtenerUsuario(),
    obtenerProductos()
  ]);

  console.log(usuario);
  console.log(productos);
}

ejecutar();