// Usando una lista de usuarios, busca un usuario por id.
// Requisitos
// - Contempla que el usuario podria no existir.
// - Muestra un mensaje apropiado en ambos casos.
// Ejemplo de ejecucion
// Usuario encontrado: Marta
// Objetivo
// Practicar busqueda de objetos.
// Pista
// El resultado de una busqueda puede ser undefined
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // getId():number {
    //     return this.id;
    // }
    getId = () => this.id;
}
let users = [];
users.push(new User(123, 'oscar'));
users.push(new User(456, 'nay'));
let found = users.find(p => p.getId() == 456);
console.log(found);
let notFound = users.find(p => p.getId() == 789);
console.log(notFound);
export {};
