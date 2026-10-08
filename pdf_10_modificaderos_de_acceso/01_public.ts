// Crea una clase Person con una propiedad publica name.
// Requisitos
// - Inicializa name en el constructor.
// - Lee y modifica name desde fuera de la clase.
// Ejemplo de ejecucion
// Nombre: Ana
// Nuevo nombre: Laura
// Objetivo
// Comprender el acceso public.
// Pista
// Los miembros public pueden utilizarse desde fuera de la clase

export {};

class Person {
    constructor(
        public name: string, 
        private age: number) {
    }
}

let p1:Person = new Person('a', 1)
p1.name = 'b'
// p1.age = 2 // ERROR: es privado