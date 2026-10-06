// Convierte una funcion tradicional que multiplica dos numeros en una arrow function.
// Requisitos
// - Tipa parametros y retorno.
// - Guarda la funcion en una constante.
// Ejemplo de ejecucion
// Multiplicacion: 24
// Objetivo
// Practicar arrow functions.
// Pista
// Una funcion flecha puede asignarse a una variable

export{};

function multiplica1(a:number, b:number): number {
    return a * b;
}

let multiplica2 = (a:number, b:number) => a * b;

console.log(multiplica1(3,4))
console.log(multiplica2(3,4))