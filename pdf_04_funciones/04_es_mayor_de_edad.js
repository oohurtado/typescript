// Crea una funcion que reciba una edad y devuelva true si la persona es mayor de edad.
// Requisitos
// - El parametro debe ser number.
// - El retorno debe ser boolean.
// Ejemplo de ejecucion
// Edad: 20 | Mayor de edad: true
// Objetivo
// Practicar funciones booleanas.
// Pista
// Una comparacion ya produce un boolean.
function es_mayor(edad) {
    return edad >= 18;
}
console.log(es_mayor(65));
console.log(es_mayor(18));
console.log(es_mayor(15));
export {};
