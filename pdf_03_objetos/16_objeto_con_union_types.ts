// Crea una orden con id, total y status. El status solamente puede ser pending, paid o cancelled.
// Requisitos
// - Restringe los valores validos.- 
// Crea varias ordenes con diferentes estados.
// Ejemplo de ejecucion
// Orden 10 - Estado: paid
// Objetivo
// Combinar objetos con literal y union types.
// Pista
// No uses string general para un conjunto cerrado de estados

type Status = 'pending' | 'paid' | 'cancelled'

class Orden {

    constructor(
        private id: number,
        private total: number,
        private status: Status
    ) {

    }
}

let o1: Orden = new Orden(1,500,'pending')
let o2: Orden = new Orden(1,500,'cancelled')
console.log(o1)
console.log(o2)