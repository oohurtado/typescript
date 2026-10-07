"use strict";
// Crea una clase Rectangle con width y height.
// Requisitos
// - Agrega metodos getArea y getPerimeter.
// - Ambos devuelven number.
// Ejemplo de ejecucion
// Area: 50 | Perimetro: 30
// Objetivo
// Practicar metodos que calculan datos.
// Pista
// Los metodos pueden utilizar propiedades de la instancia
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculate() {
        return this.width * this.height;
    }
}
console.log(new Rectangle(5, 4).calculate());
export{};