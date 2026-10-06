// Construye un inventario en memoria con productos que tengan id, nombre, categoria, precio, stock y activo.
// Requisitos
// - Crea al menos seis productos.
// - Obtiene los productos activos.
// - Filtra por categoria.
// - Calcula el valor total del inventario usando precio por stock.
// - Busca por id.
// - Encuentra productos sin stock.
// - Ordena productos por precio.
// - No uses any.
// Ejemplo de ejecucion
// Productos activos: 5
// Sin stock: 1
// Valor inventario: $24500
// Objetivo
// Integrar arrays, objetos, busquedas, filtros, transformaciones y ordenamiento.
// Pista
// Divide el problema en funciones pequenas y tipadas

let productos: [ id:number, nombre:string, categoria:string, precio:number, stock:number, activo:boolean][] = []

productos.push([1,'mouse','electronico',250,20,true])
productos.push([2,'teclado','electronico',350,10,true])
productos.push([3,'monitor','electronico',5400,5,true])
productos.push([4,'escritorio','mueble',1500,0,false])
productos.push([5,'silla gamer','mueble',3500,5,false])
productos.push([6,'zelda','juegos',900,2,true])


console.log('Todos los productos:')
console.log(productos)

let productosActivos = productos.filter(p => p[5])
console.log('Productos activos')
console.log(productosActivos)

let productosPorCaetgoia = productos.filter(p => p[2] === 'electronico')
console.log('Productos de "electronico"')
console.log(productosPorCaetgoia)

let total = 0
productos.forEach(p => {
    total += p[3] * p[4]
})
console.log(`Total inventario: ${total}`)

let product = productos.find(p => p[0] === 5)
if (product === undefined) {
    console.log('no se encontro')
} else {
    console.log(`se encontro: ${product}`)
}

let productosOrdenados = productos?.sort((a,b) => a[3] - b[3])
console.log('productos ordenados: ')
console.log(productosOrdenados)