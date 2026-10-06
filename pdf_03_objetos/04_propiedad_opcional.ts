// Representa un usuario con id, nombre, correo y telefono opcional.
// Requisitos
// - Crea un usuario con telefono y otro sin telefono.
// - Muestra un mensaje cuando no exista telefono.
// Ejemplo de ejecucion
// Usuario: Ana | Telefono: no registrado
// Objetivo
// Practicar propiedades opcionales.
// Pista
// Una propiedad opcional puede declararse con ?

class User {

    constructor(
        private name: string,
        private phone?: string
    ) {}
}

let oscar = new User('oscar');
let nay = new User('nay', '686')
console.log(oscar)
console.log(nay)
export {};