// Crea Product con id readonly, name y price.
// Requisitos
// - id se establece al crear el producto.
// - name y price pueden cambiar.
// - Incluye como comentario un intento invalido de cambiar id.
// Ejemplo de ejecucion
// Producto 10 - Teclado
// Objetivo
// Practicar readonly.
// Pista
// readonly permite lectura pero impide reasignacion

export{};
class Product {
    constructor(
        private readonly id:number,
        private name:string
    ) {    
    }

    public update() {
        // this.id = 2; // ERROR: es readonly
    }
}
let p = new Product(1,'teclado')