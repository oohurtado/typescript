// Crea una funcion procesarNumero que reciba un numero y otra funcion encargada de transformarlo.
// Requisitos
// - La funcion recibida debe aceptar number y devolver number.
// - Prueba con duplicar y elevar al cuadrado.
// Ejemplo de ejecucion
// Duplicado: 10 | Cuadrado: 25
// Objetivo
// Introducir funciones como parametros.
// Pista
// El tipo de un parametro tambien puede describir una funcion

export {};

type op = (p:number) => number;

function magic(n:number, execute: op) : number {
    return execute(n);
}

console.log(magic(5, (x) => x * x));
console.log(magic(4, (x) => x * 2))