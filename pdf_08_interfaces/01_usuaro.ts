// Define una interface User con id, name y email. Crea un objeto que la cumpla.
// Requisitos
// - Usa number para id.
// - Usa string para name y email.
// - No uses any.
// Ejemplo de ejecucion
// 1 - Ana - ana@email.com
// Objetivo
// Practicar la declaracion basica de interfaces.
// Pista
// Una interface describe la forma esperada de un objeto

export{};

interface User {
    id:number,
    name:string,
    email:string
}

let user:User = {
    id: 1,
    name: 'Oscar Hurtado',
    email: 'gmail'
}

console.log(`${user.id} | ${user.name} | ${user.email}`);