// Crea una Promise y agrega then, catch y finally.
// Requisitos
// - finally debe ejecutarse independientemente del resultado.
// - Muestra un mensaje al finalizar.
// Ejemplo de ejecucion
// Proceso finalizado
// Objetivo
// Practicar finally.
// Pista
// finally es util para tareas de limpieza o finalizacion

export const promise04 = new Promise<void>((resolve, reject) => {
    resolve()
});