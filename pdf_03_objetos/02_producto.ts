// Crea un objeto producto con id, nombre, precio y disponible.
// Requisitos
// - Usa number, string y boolean.
// - Muestra una descripcion del producto.
// Ejemplo de ejecucion
// 10 - Teclado - $850 - Disponible: true
// Objetivo
// Reforzar propiedades con diferentes tipos.
// Pista
// Cada propiedad puede tener un tipo diferente

class Product {
    
    constructor(
        private id:number,
        private nombre:string,
        private precio:number,
        private disponible:boolean) {
    }

    public str() {
        return `${this.id} ${this.nombre} - Disponible: ${this.disponible ? 'si' : 'no'}`
    }
}

let teclado:Product = new Product(123,'teclado',300,true)
console.log(`${teclado.str()}`)

export {};