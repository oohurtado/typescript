// Define una interface Account cuyo id sea readonly.
// Requisitos
// - Permite modificar balance.
// - Incluye como comentario un intento de cambiar id.
// Ejemplo de ejecucion
// Cuenta 10 - Saldo: $2500
// Objetivo
// Practicar propiedades de solo lectura.
// Pista
// readonly evita reasignar la propiedad

interface Account {
    readonly id: number,
    name: string
    balance: number,
}

let a:Account = {
    id: 1,
    name: 'oscar',
    balance: 500
}

console.log(a)
// a.id = 1 // error
a.balance += 100
console.log(a)

export {};