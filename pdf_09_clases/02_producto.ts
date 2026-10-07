// Crea una clase Product con id, name y price.
// Requisitos
// - Inicializa las propiedades en el constructor.
// - Agrega un metodo para mostrar informacion.
// Ejemplo de ejecucion
// 1 - Teclado - $850
// Objetivo
// Reforzar propiedades y metodos de instancia.
// Pista
// Cada instancia conserva sus propios valores

class Product {
    constructor(
        private id:number,
        private name:string,
        private price:number,
    ) {}

    public details() {
        return `${this.id} ${this.name} ${this.price}`
    }
}

let p = new Product(1,'teclado', 399)
console.log(p)
export{};