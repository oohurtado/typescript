// Define Person con name y age. Crea Employee extendiendo Person y agregando employeeId y department.
// Requisitos
// - No repitas name y age.
// - Crea al menos dos empleados.
// Ejemplo de ejecucion
// 100 - Laura - Desarrollo
// Objetivo
// Practicar extends entre interfaces.
// Pista
// Una interface puede heredar miembros de otra

export {};

interface Person {
    name: string
    age: number
    str(): string
}

interface Employee extends Person {
    id: number
    department: string
}

let e1:Employee = {
    id: 1,
    age: 43,
    department: 'programacion',
    name: 'oscar',
    str: function (): string {
        return `${this.id} ${this.name}`
    }
}

function foo(p:Person) {
    console.log(`${p.name} ${p.age}`)
}

console.log(e1.str())
foo(e1)