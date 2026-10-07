// Crea una funcion que simule completar una tarea y reciba un callback que muestre un mensaje al finalizar.
// Requisitos
// - El callback recibe un string.
// - El callback no devuelve valor.
// Ejemplo de ejecucion
// Tarea completada correctamente.
// Objetivo
// Practicar callbacks tipados.
// Pista
// Define claramente la firma esperada del callback
function completarTarea(callback) {
    console.log("Completando tarea...");
    callback("Tarea completada correctamente.");
}
completarTarea((mensaje) => {
    console.log(mensaje);
});
export {};
