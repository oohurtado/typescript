// Crea una funcion que reciba unknown y determine si es un array.
// Requisitos
// - Usa Array.isArray.
// - Muestra cuantos elementos contiene cuando sea array.
// Ejemplo de ejecucion
// Elementos: 4
// Objetivo
// Practicar narrowing de arrays.
// Pista
// Array.isArray permite comprobar arrays en runtime

export{}
function validarArray(valor: unknown): void {
  if (Array.isArray(valor)) {
    console.log(`Elementos: ${valor.length}`);
  } else {
    console.log("El valor no es un array");
  }
}

validarArray([10, 20, 30, 40]);
// Elementos: 4

validarArray("Hola");
// El valor no es un array

validarArray(null);
// El valor no es un array