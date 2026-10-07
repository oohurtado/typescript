// Define una interface Product con id, name, price y active. Crea tres productos.
// Requisitos
// - Guarda los productos en Product[].
// - Muestra nombre y precio.
// Ejemplo de ejecucion
// Teclado - $850
// Objetivo
// Usar interfaces con colecciones.
// Pista
// Una misma interface puede tipar muchos objetos

export{};

interface Product {
    id:number
    name:string
    price:number
    active:boolean
}

let products:Product[] = []

products.push(
    {
        id: 1,
        active: true,
        name: 'teclado',
        price: 399
    },
    {
        id: 2,
        active: false,
        name: 'mouse',
        price: 599
    }
)

products.forEach(p => console.log(`${p.id} | ${p.name} | ${p.active} | ${p.price}`))