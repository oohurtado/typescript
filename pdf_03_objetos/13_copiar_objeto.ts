// Crea un usuario y genera una copia independiente modificando solamente el nombre.
// Requisitos
// - No cambies el objeto original.
// - Muestra ambos objetos.
// Ejemplo de ejecucion
// Original: Ana | Copia: Maria
// Objetivo
// Practicar copia de objetos.
// Pista
// Investiga el spread operator para objetos

export {};

class Person {

    constructor(
        public name: string,
        private age:number
    ) {}
}

let personA: Person = new Person('oscar', 43)
let personB = { ...personA }
console.log(personA)
personB.name = 'nay'
console.log(personB)