// Crea un objeto que represente un videojuego y modifica posteriormente su precio y disponibilidad.
// Requisitos
// - Conserva los tipos originales.
// - Muestra el objeto antes y despues.
// Ejemplo de ejecucion
// Precio anterior: 1200 | Precio nuevo: 950
// Objetivo
// Practicar actualizacion de propiedades.
// Pista
// TypeScript verificara que el nuevo valor coincida con el tipo de la propiedad

export {};

class VideoGame {

    constructor(
        private name:string,
        private price: number,
        private stock: number,
        private available:boolean,
    ) {        
    }

    public setPrice(price: number) {
        this.price = price;
    }
}

let p = new VideoGame('Zelda', 999, 10, true)
console.log(p)
p.setPrice(599);
console.log(p)