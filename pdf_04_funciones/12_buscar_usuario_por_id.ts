// Define un tipo User y crea una funcion que busque un usuario por id.
// Requisitos
// - El usuario podria no existir.
// - Representa esa posibilidad en el tipo de retorno.
// Ejemplo de ejecucion
// Usuario encontrado: Ana
// Objetivo
// Practicar retornos que pueden no contener un valor.
// Pista
// Una busqueda con find puede devolver undefined

export{};

type User = {
    id: number
    name: string
}

let users:User[] = [
    { id:1, name: 'oscar'}, {id:2, name:'nay'}
]

function encontrarPersona(id:number) : User | undefined {
    return users.find(p => p.id == id);
}

console.log(encontrarPersona(1))
console.log(encontrarPersona(5))