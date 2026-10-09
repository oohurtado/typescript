// Crea una funcion que reciba unknown y determine primero si es un objeto no nulo.
// Requisitos
// - Comprueba typeof.
// - Comprueba null.
// - No accedas aun a propiedades concretas.
// Ejemplo de ejecucion
// El valor es un objeto
// Objetivo
// Comprender la primera validacion necesaria para objetos desconocidos.
// Pista
// typeof null tambien produce object, por lo que debes comprobarlo

export{}

function validarObjeto(valor: unknown): void {
  if (typeof valor === "object" && valor !== null) {
    console.log("El valor es un objeto");
  } else {
    console.log("El valor no es un objeto");
  }
}

validarObjeto({ nombre: "Oscar" }); // El valor es un objeto
validarObjeto(null);                // El valor no es un objeto
validarObjeto("Hola");              // El valor no es un objeto
validarObjeto(123);                 // El valor no es un objeto