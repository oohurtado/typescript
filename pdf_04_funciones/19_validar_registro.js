// Crea una funcion que reciba un objeto User y devuelva una lista de mensajes de error.
// Requisitos
// - Valida nombre vacio.
// - Valida email vacio.
// - Valida edad menor a 18.
// - Si no hay errores, devuelve un array vacio.
// Ejemplo de ejecucion
// Errores encontrados: 2
// Objetivo
// Practicar funciones de validacion con retornos tipados.
// Pista
// Cada regla puede agregar un mensaje al array de errores
function validate(u) {
    let arr = [];
    if (u.nombre === undefined) {
        arr.push('nombre vacio');
    }
    if (u.edad === undefined) {
        arr.push('edad vacio');
    }
    if (u.edad !== undefined && u.edad < 18) {
        arr.push('menor de edad');
    }
    return arr;
}
let result = validate({});
console.log(result);
export {};
