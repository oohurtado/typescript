"use strict";
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
    title;
    completed;
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
    complete() {
        this.completed = true;
    }
    reopen() {
        this.completed = false;
    }
    details() {
        return `${this.title} - ${this.completed ? 'Completada' : 'Pendiente'}`;
    }
}
let task = new Task('Estudiar TypeScript');
console.log(task.details());
task.complete();
console.log(task.details());
task.reopen();
console.log(task.details());
