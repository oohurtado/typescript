// Crea una funcion que lance un error y capturalo en try/catch tratando el error como unknown.
// Requisitos
// - Comprueba si es instanceof Error.
// - No asumas directamente que tiene message.
// Ejemplo de ejecucion
// Error: operacion fallida
// Objetivo
// Practicar unknown en manejo de errores.
// Pista
// Los valores capturados pueden necesitar narrowing antes de usarse

export{}
function ejecutarOperacion(): void {
  throw new Error("operacion fallida");
}

try {
  ejecutarOperacion();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log("Ocurrió un error desconocido");
  }
}