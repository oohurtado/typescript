// Crea una funcion generica que devuelva el ultimo elemento de un array.
// Requisitos
// - Debe conservar el tipo de los elementos.
// - No uses tipos concretos.
// Ejemplo de ejecucion
// Ultimo: 50
// Objetivo
// Reforzar funciones genericas.
// Pista
// El indice final depende de length
function foo(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1];
    }
    else {
        return undefined;
    }
}
console.log(foo([1, 2, 3, 4, 5]));
console.log(foo(['a', 'e', 'i', 'o', 'u']));
export {};
