// Crea una interface Customer con phone opcional.
// Requisitos
// - Crea un cliente con telefono y otro sin telefono.
// - Comprueba si existe antes de mostrarlo.
// Ejemplo de ejecucion
// Laura - Telefono no registrado
// Objetivo
// Practicar propiedades opcionales.
// Pista
// Usa ? en la propiedad

export{};
interface Customer {
    name:string
    phone?:string
}

let customers:Customer[] = []
customers.push({name:'oscar', phone:'911'})
customers.push({name:'nay'})
customers.forEach(p => console.log(`${p.name} | Telefono: ${p.phone === undefined ? 'no proporcionado': p.phone}`))