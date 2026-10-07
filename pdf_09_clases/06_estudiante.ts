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

    constructor(
        private name:string,
        private grades:number[]
    ) { }

    public addGrade(grade:number) {
        this.grades.push(grade)
    }

    public getAvg() {
        return this.grades.reduce((sum, n) => sum += n) / this.grades.length
    }
}

let s = new Student('oscar', [6,7,8])
s.addGrade(9)
s.addGrade(10)
console.log(s.getAvg())
