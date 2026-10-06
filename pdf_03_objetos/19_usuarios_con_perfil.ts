// Crea usuarios que tengan id, email, active y un objeto profile con firstName, lastName y birthYear.
// Requisitos
// - Crea al menos cuatro usuarios.
// - Obtiene solamente los activos.
// - Genera el nombre completo a partir del perfil.
// Ejemplo de ejecucion
// Usuarios activos: 3
// Laura Garcia
// Objetivo
// Trabajar con estructuras de objetos mas realistas.
// Pista
// No es necesario duplicar el nombre completo como propiedad

/*
id
email
active
profile
- firstName
- lastName
- birthYear
*/

class User {
    constructor(
        private id:number, 
        private email:string, 
        private profile:Profile) {}
}

class Profile {
    constructor(
        private firstName: string,
        private lastName: string,
        private birthYear: Date,
    ) {}
}

let u = new User(123,'oh@gmail.com', new Profile('oscar', 'hurtado', new Date()))
console.log(u)

export {};