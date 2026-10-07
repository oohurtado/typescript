"use strict";
// Crea una clase Student con name y un array de calificaciones.
// Requisitos
// - Agrega addGrade.
// - Agrega getAverage.
// - No permitas calificaciones fuera del rango definido.
// Ejemplo de ejecucion
// Promedio: 8.7
// Objetivo
// Combinar clases con arrays.
// Pista
// Las calificaciones forman parte del estado del estudiante
class Student {
    name;
    grades;
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAvg() {
        return this.grades.reduce((sum, n) => sum += n) / this.grades.length;
    }
}
let s = new Student('oscar', [6, 7, 8]);
s.addGrade(9);
s.addGrade(10);
console.log(s.getAvg());
