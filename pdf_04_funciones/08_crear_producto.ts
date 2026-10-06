// Crea una funcion que reciba id, nombre y precio y devuelva un objeto Product.
// Requisitos
// - Define el tipo de retorno.
// - No uses any.
// Ejemplo de ejecucion
// Producto creado: Mouse - $450
// Objetivo
// Practicar objetos como valores de retorno.
// Pista
// La funcion debe construir y devolver el objeto

export {};

type Product = {
    id:number,
    nombre:string,
    precio:number,
}

function createProduct(id:number, nombre: string, precio: number) : Product {
    return {id,nombre,precio}
}

let p:Product = createProduct(1,'p',1)
console.log(p)