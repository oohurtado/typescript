// Crea una funcion que reciba un array de numeros y devuelva el numero mayor.
// Requisitos
// - No debe depender de una cantidad fija de elementos.
// - Define correctamente el retorno.
// Ejemplo de ejecucion
// Mayor: 95
// Objetivo
// Practicar procesamiento de colecciones dentro de funciones.
// Pista
// Compara los elementos mientras recorres el array

export{};
function obtenerMayor(nums:number[]) : number {
    let mayor = nums.length > 0 ? nums[0] : 0
    nums.forEach(p => {
        if ( p > mayor) {
            mayor = p;
        }
    })
    return mayor;
}


console.log(obtenerMayor([43,5,6,46,54,4,5,54,545,44,54,54,6,456,54,35,2]))
console.log(obtenerMayor([]))