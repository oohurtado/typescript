// Crea un objeto contador que tenga un valor numerico y un metodo para incrementarlo.
// Requisitos
// - Tipa tambien el metodo.
// - Ejecuta el metodo varias veces y muestra el resultado.
// Ejemplo de ejecucion
// Contador: 3
// Objetivo
// Comprender que los objetos tambien pueden contener comportamiento.
// Pista
// Una propiedad puede almacenar una funcion

class Counter {

    constructor(private counter:number) {
        this.counter = counter;
    }

    public increment() {
        this.counter++
    }
}

let c: Counter = new Counter(0)
c.increment();
c.increment();
console.log(c)

export {};