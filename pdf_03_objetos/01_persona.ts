// Crea un objeto que represente una persona con nombre, edad y ciudad. Muestra cada propiedad.
// Requisitos- Define los tipos de las propiedades.- No uses any.
// Ejemplo de ejecucion
// Nombre: Laura | Edad: 30 | Ciudad: Guadalajara
// Objetivo
// Practicar la creacion y lectura de objetos tipados.
// Pista
// Empieza definiendo la forma que debe tener el objeto

export {};

class Persona {

    constructor(
        private nombre:string,
        private edad:number,
        private ciudad:string,) { 
        }
}

let oscar:Persona = new Persona('oscar hurtado', 43, 'guasave')
console.log(oscar)