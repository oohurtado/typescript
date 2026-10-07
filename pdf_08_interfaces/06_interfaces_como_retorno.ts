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

export {};

interface User {
    readonly id: number,
    name: string,    
}

function foo(id:number, name:string) : User {
    return {id, name}
}

let user: User = foo(1,'oscar')
console.log(user)