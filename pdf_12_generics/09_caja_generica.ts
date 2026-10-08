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

class Box<T> {
    private val:T|undefined

    constructor() {
    }

    setValue(v:T) {
        this.val = v
    }

    getValue() {
        return this.val
    }
}

let b:Box<number> = new Box()
b.setValue(1)
let r = b.getValue()
console.log(r)

export{};