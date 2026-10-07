// Crea una clase Person con name y age. Inicializa ambas propiedades mediante el constructor.
// Requisitos
// - Crea al menos dos instancias.
// - Agrega un metodo describe que devuelva una descripcion.
// Ejemplo de ejecucion
// Ana tiene 28 anos
// Objetivo
// Practicar clases, constructores e instancias.
// Pista
// El constructor recibe los datos necesarios para crear el objeto

class Persona {
    constructor(
        private name:string,
        private age:number) {
    }
}

let p1 = new Persona('oscar', 43)
let p2 = new Persona('Nahara', 36)

console.log(p1)
console.log(p2)
export{};