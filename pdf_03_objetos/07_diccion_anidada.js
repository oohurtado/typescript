// Crea un usuario que contenga un objeto address con calle, ciudad y codigo postal.
// Requisitos
// - Tipa tanto el usuario como la direccion.
// - Muestra la ciudad desde el objeto principal.
// Ejemplo de ejecucion
// Ciudad: Culiacan
// Objetivo
// Practicar objetos anidados.
// Pista
// Una propiedad puede ser a su vez otro objeto
class Persona {
    nombre;
    direccion;
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
class Direccion {
    calle;
    numero;
    constructor(calle, numero) {
        this.calle = calle;
        this.numero = numero;
    }
}
let p = new Persona('oscar', new Direccion('siempre viva', '123'));
console.log(p);
export {};
