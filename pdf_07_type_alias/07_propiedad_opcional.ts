// Crea un alias User con id, name, email y phone opcional.
// Requisitos
// - Crea usuarios con y sin telefono.
// - Muestra un mensaje cuando no exista.
// Ejemplo de ejecucion
// Ana - Telefono no registrado
// Objetivo
// Combinar aliases con propiedades opcionales.
// Pista
// Las propiedades opcionales tambien pueden formar parte de un type

export{};
type User = {
    id:number,
    name:string,
    email:string,
    phone?:string
}

let users:User[] = []
users.push({id:1, name:'oscar',email:'gmail', phone:'111'})
users.push({id:2, name:'nay',email:'gmail', phone:'222'})
users.push({id:2, name:'nay',email:'gmail'})

users.forEach(p => console.log(`${p.id} | Nombre: ${p.name} | Correo: ${p.email} | Telefono: ${p.phone === undefined ? 'No registrado' : p.phone}`))