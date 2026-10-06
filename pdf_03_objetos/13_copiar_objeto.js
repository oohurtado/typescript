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
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let personA = new Person('oscar', 43);
let personB = { ...personA };
console.log(personA);
personB.name = 'nay';
console.log(personB);
export {};
