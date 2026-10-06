// Crea una funcion que reciba una lista de productos y un precio maximo, y devuelva los productos cuyo precio
// no supere ese valor.
// Requisitos
// - El resultado debe ser Product[].
// - No modifiques el array original.
// Ejemplo de ejecucion
// Productos encontrados: 3
// Objetivo
// Practicar funciones que devuelven colecciones.
// Pista
// filter devuelve un nuevo array

export{};

type Product = {
    name: string,
    price: number
}

let products:Product[] = [
    {
        name: 'teclado',
        price: 250,
    },
    {
        name: 'mouse',
        price: 750,
    },
    {
        name: 'monitor',
        price: 1000
    }
]

function obtenerMenores(cantidad:number) : Product[] {
    let arr = products.filter(p => p.price <= cantidad);
    return arr;
}

console.log(obtenerMenores(100))
console.log(obtenerMenores(500))
console.log(obtenerMenores(1000))