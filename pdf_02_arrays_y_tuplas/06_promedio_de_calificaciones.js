// Calcula el promedio de un array de calificaciones.
// Requisitos- Debe funcionar aunque cambien las calificaciones.- Muestra el promedio.
// Ejemplo de ejecucion
// Promedio: 8.6
// Objetivo
// Combinar arrays con calculos.
// Pista
// Primero suma y luego divide entre length
let data = [1, 2, 3, 4, 5, 5];
let total = 0;
data.forEach(p => {
    total += p;
});
console.log(`${total} ${total / data.length}`);
export {};
