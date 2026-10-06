// Crea una funcion que reciba nombre y precio y devuelva un objeto producto.
// Requisitos- Define correctamente el tipo de retorno.- Agrega un id al producto creado.
// Ejemplo de ejecucion
// Producto creado: Monitor - $3500
// Objetivo
// Practicar funciones que construyen objetos.
// Pista
// El retorno puede tener una estructura previamente definida

export {};

class Producto {

    constructor(
        private id: number,
        private name:string
    ) { }
}

function createProduct(id:number, name:string): Producto {
    return new Producto(id, name);
}

let p = createProduct(1, 'teclado')
console.log(p)