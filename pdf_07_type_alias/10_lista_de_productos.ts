// Crea un alias ProductList que represente una coleccion de Product.
// Requisitos
// - Reutiliza el alias Product creado previamente.
// - Crea una funcion que reciba ProductList.
// Ejemplo de ejecucion
// Productos: 5
// Objetivo
// Crear aliases basados en otros aliases.
// Pista
// Un alias puede hacer referencia a otro type

export{};

type Product = {
    id:number
    name:string
}

type ProductList = Product[]

function foo(products:ProductList) {

}

let products:ProductList = []
products.push({id:1,name:'p1'})
products.push({id:2,name:'p3'})
products.push({id:3,name:'p2'})
products.forEach(p => console.log(p))