// Define una interface Calculator con un metodo add.
// Requisitos
// - El metodo recibe dos number.
// - Devuelve number.
// - Crea un objeto que implemente la estructura.
// Ejemplo de ejecucion
// Resultado: 15
// Objetivo
// Practicar firmas de metodos.
// Pista
// Las interfaces tambien pueden describir comportamiento

export{};

interface Calculator {
    add: (a:number, b:number) => number
    del(x:number) : void
}

let ccc: Calculator = {
    add: (a, b) => a + b,
    
    del: function (x: number): void {
        throw new Error("Function not implemented.");
    }
}

console.log(ccc.add(3,4));