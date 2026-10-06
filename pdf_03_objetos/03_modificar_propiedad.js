"use strict";
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
class VideoGame {
    name;
    price;
    stock;
    available;
    constructor(name, price, stock, available) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.available = available;
    }
    setPrice(price) {
        this.price = price;
    }
}
let p = new VideoGame('Zelda', 999, 10, true);
console.log(p);
p.setPrice(599);
console.log(p);

export {};