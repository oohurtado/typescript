// Define Address y User. User debe contener una propiedad address de tipo Address.
// Requisitos
// - Address contiene street, city y zipCode.
// - Crea varios usuarios.
// Ejemplo de ejecucion
// Ana - Culiacan
// Objetivo
// Componer interfaces.
// Pista
// Una propiedad puede utilizar otra interface

export{};

interface User {
    name: string
    address: Address
}

interface Address {
    street:string
}

let user:User = {
    name: 'oscar',
    address: {
        street: 'siempre viva'
    }
}

console.log(user)