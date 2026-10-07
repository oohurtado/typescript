// Crea una funcion que reciba un Product y devuelva una descripcion.
// Requisitos
// - Usa la interface como tipo del parametro.
// - Define el retorno.
// Ejemplo de ejecucion
// Monitor - $3500
// Objetivo
// Practicar interfaces en funciones.
// Pista
// No necesitas pasar cada propiedad por separado.
function foo(p) {
    return `${p.id} ${p.name} ${p.price}`;
}
let desc = foo({ id: 1, name: 'teclado', price: 990 });
console.log(desc);
export {};
