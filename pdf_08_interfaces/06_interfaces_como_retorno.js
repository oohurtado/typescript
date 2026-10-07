// Crea una funcion createUser que devuelva un User.
// Requisitos
// - Recibe id, name y email.
// - Declara User como retorno.
// Ejemplo de ejecucion
// Usuario creado: Carlos
// Objetivo
// Practicar interfaces como tipos de retorno.
// Pista
// El objeto devuelto debe cumplir toda la interface
function foo(id, name) {
    return { id, name };
}
let user = foo(1, 'oscar');
console.log(user);
export {};
