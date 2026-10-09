// Recibe unknown y valida que sea un array formado exclusivamente por numeros.
// Requisitos
// - Primero comprueba que sea array.
// - Comprueba cada elemento.
// - No uses assertions para saltarte la validacion.
// Ejemplo de ejecucion
// Array numerico valido
// Objetivo
// Validar estructuras un poco mas complejas.
// Pista
// every puede servir para validar todos los elementos

export{}

function validarArrayNumerico(valor: unknown): void {
  if (Array.isArray(valor)) {
    const esNumerico = valor.every(
      (elemento) => typeof elemento === "number"
    );

    if (esNumerico) {
      console.log("Array numerico valido");
    } else {
      console.log("El array contiene elementos que no son numeros");
    }
  } else {
    console.log("El valor no es un array");
  }
}

validarArrayNumerico([10, 20, 30, 40]);
// Array numerico valido

validarArrayNumerico([10, "20", 30]);
// El array contiene elementos que no son numeros

validarArrayNumerico("123");
// El valor no es un array