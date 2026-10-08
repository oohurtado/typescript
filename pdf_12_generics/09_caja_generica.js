// Crea una clase Box que almacene un valor.
// Requisitos
// - Agrega getValue y setValue.
// - Prueba con number y string.
// Ejemplo de ejecucion
// Caja: 100
// Objetivo
// Introducir clases genericas.
// Pista
// La instancia decide el tipo concreto de T
class Box {
    val;
    constructor() {
    }
    setValue(v) {
        this.val = v;
    }
    getValue() {
        return this.val;
    }
}
let b = new Box();
b.setValue(1);
let r = b.getValue();
console.log(r);
export {};
