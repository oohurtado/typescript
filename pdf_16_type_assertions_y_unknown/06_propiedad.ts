// Recibe un valor unknown e intenta obtener una propiedad name de forma segura.
// Requisitos
// - Primero valida que sea objeto.
// - Comprueba que name exista.
// - Comprueba que name sea string.
// Ejemplo de ejecucion
// Nombre: Ana
// Objetivo
// Practicar acceso seguro a propiedades de datos desconocidos.
// Pista
// El operador in puede ayudarte despues de validar que sea objeto

export{}
function obtenerNombre(valor: unknown): void {
  if (typeof valor === "object" && valor !== null) {
    if ("name" in valor) {
      if (typeof valor.name === "string") {
        console.log(`Nombre: ${valor.name}`);
      } else {
        console.log("La propiedad name no es un string");
      }
    } else {
      console.log("El objeto no tiene la propiedad name");
    }
  } else {
    console.log("El valor no es un objeto");
  }
}

obtenerNombre({ name: "Ana" });
// Nombre: Ana