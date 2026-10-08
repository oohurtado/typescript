// Crea una funcion mapItems que transforme un array de T en un array de U.
// Requisitos
// - Recibe una funcion transformadora.
// - Prueba convirtiendo usuarios en nombres.
// Ejemplo de ejecucion
// Ana, Carlos, Laura
// Objetivo
// Practicar generics con tipos de entrada y salida diferentes.
// Pista
// T representa entrada y U representa salida

export{};
function mappItems<T,U>(arr:T[], transform: (x:T) => U): U[] {
    let result:U[] = []
    arr.forEach(p => {
        result.push(transform(p));
    })
    return result
}

class User {
    constructor(
        public nombre:string,
        public apellido:string
    ){}
}

let usersT:User[] = [new User('oscar', 'hurtado'), new User('nahara', 'brizuela')]
let usersU:string[] = mappItems<User,string>(usersT, p => `${p.nombre} ${p.apellido}`)
console.log(usersT)
console.log(usersU)
