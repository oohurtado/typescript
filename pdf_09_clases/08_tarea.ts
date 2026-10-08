// Crea una clase Task con title y completed.
// Requisitos
// - completed inicia en false.
// - Agrega complete y reopen.
// - Agrega un metodo para mostrar el estado.
// Ejemplo de ejecucion
// Estudiar TypeScript - Completada
// Objetivo
// Practicar cambios de estado mediante metodos.
// Pista
// Evita modificar el estado desde codigo duplicado

class Task {
    constructor(
        private title: string,
        private completed: boolean = false
    ) {}

    public complete() {
        this.completed = true;
    }

    public reopen() {
        this.completed = false;
    }

    public details() {
        return `${this.title} - ${this.completed ? 'Completada' : 'Pendiente'}`
    }
}

let task = new Task('Estudiar TypeScript')
console.log(task.details())
task.complete()
console.log(task.details())
task.reopen()
console.log(task.details())