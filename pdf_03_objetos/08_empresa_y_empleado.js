// Representa un empleado que contenga informacion basica y un objeto company con nombre y departamento.
// Requisitos- Usa objetos anidados.- Muestra una descripcion combinando ambos niveles.
// Ejemplo de ejecucion
// Carlos trabaja en DevSoft - Desarrollo
// Objetivo
// Reforzar acceso a propiedades anidadas.
// Pista
// Accede a las propiedades usando varios niveles con punto
class Empleado {
    nombre;
    empresa;
    constructor(nombre, empresa) {
        this.nombre = nombre;
        this.empresa = empresa;
    }
}
class Empresa {
    nombre;
    depto;
    constructor(nombre, depto) {
        this.nombre = nombre;
        this.depto = depto;
    }
}
let p = new Empleado('oscar hurtado', new Empresa('coca cola', 'desarrollo'));
console.log(p);
export {};
