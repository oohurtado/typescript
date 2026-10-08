// Crea una funcion mapItems que transforme un array de T en un array de U.
// Requisitos
// - Recibe una funcion transformadora.
// - Prueba convirtiendo usuarios en nombres.
// Ejemplo de ejecucion
// Ana, Carlos, Laura
// Objetivo
// Practicar generics con tipos de entrada y salida diferentes.
// Pista
// T representa entrada y U representa salida
function mappItems(arr, transform) {
    let result = [];
    arr.forEach(p => {
        result.push(transform(p));
    });
    return result;
}
class User {
    nombre;
    apellido;
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let usersT = [new User('oscar', 'hurtado'), new User('nahara', 'brizuela')];
let usersU = mappItems(usersT, p => `${p.nombre} ${p.apellido}`);
console.log(usersT);
console.log(usersU);
export {};
