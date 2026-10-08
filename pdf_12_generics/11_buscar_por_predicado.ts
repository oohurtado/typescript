// Crea una funcion generica findItem que reciba una coleccion y una funcion de condicion.
// Requisitos
// - La condicion recibe T y devuelve boolean.
// - Devuelve T o undefined.
// Ejemplo de ejecucion
// Producto encontrado: Teclado
// Objetivo
// Combinar generics y callbacks.
// Pista
// El callback tambien debe conservar el tipo T.
export{};
function findItem<T>(items: T[], condition: (item: T) => boolean): T | undefined {
    return items.find(condition)
}

interface Product {
    id: number
    name: string
    price: number
}

const products: Product[] = [
    { id: 1, name: "Mouse", price: 300 },
    { id: 2, name: "Teclado", price: 500 },
    { id: 3, name: "Monitor", price: 3000 }
]

const product = findItem(products, p => p.name === "Teclado")
console.log(`Producto encontrado: ${product?.name}`)