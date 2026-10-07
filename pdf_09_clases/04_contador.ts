// Crea una clase Counter con un valor inicial de 0.
// Requisitos
// - Agrega increment, decrement y getValue.
// - Crea una instancia y realiza varias operaciones.
// Ejemplo de ejecucion
// Contador: 3
// Objetivo
// Practicar modificacion del estado de una instancia.
// Pista
// Cada metodo puede modificar una propiedad del objeto

export {};

class Counter {
    
    private count:number;

    constructor(init:number) {
        this.count = init
    }

    public increment() { 
        this.count++; 
    }

    public decrement() {
        this.count--;
    }

    public getValue() {
        return this.count
    }
}

let c = new Counter(0) // 0
console.log(c.getValue()) // 0
c.increment() // 1
c.increment() // 2
c.increment() // 3
c.decrement() // 2
console.log(c.getValue()) // 2