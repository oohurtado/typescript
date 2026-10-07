// Crea una funcion que devuelva un number cuando una operacion sea valida o un string cuando exista un error.
// Requisitos
// - Declara el union type de retorno.
// - Prueba ambos resultados.
// Ejemplo de ejecucion
// Resultado: 20
// Error: division entre cero
// Objetivo
// Practicar unions en retornos.
// Pista
// El retorno puede ser number | string
function divide_y_venceras(a, b) {
    if (b == 0) {
        return 'no es posible dividir entre cero';
    }
    return a / b;
}
console.log(divide_y_venceras(10, 5));
console.log(divide_y_venceras(5, 10));
console.log(divide_y_venceras(10, 0));
console.log(divide_y_venceras(0, 10));
export {};
