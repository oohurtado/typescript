// Crea una clase Person con una propiedad protected name y una clase Employee que herede de Person.
// Requisitos
// - Employee debe poder usar name.
// - Intenta acceder desde fuera como comentario.
// Ejemplo de ejecucion
// Empleado: Ana
// Objetivo
// Practicar protected.
// Pista
// protected permite acceso en la clase y sus clases derivadas

export{};

class Person {
    protected name:string;

    constructor(name:string) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name:string) {
        super(name);
    }

    details() {
        console.log(this.name)
        this.name = '!'
        console.log(this.name)
    }
}

let e = new Employee('?')
e.details()