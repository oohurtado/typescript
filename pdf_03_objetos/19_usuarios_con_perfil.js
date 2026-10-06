"use strict";
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
    id;
    email;
    profile;
    constructor(id, email, profile) {
        this.id = id;
        this.email = email;
        this.profile = profile;
    }
}
class Profile {
    firstName;
    lastName;
    birthYear;
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
}
let u = new User(123, 'oh@gmail.com', new Profile('oscar', 'hurtado', new Date()));
console.log(u);


export {};