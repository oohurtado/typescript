// Declara una variable de tipo unknown y asignale primero un string y despues un number.
// Requisitos
// - No uses any.
// - No accedas a metodos especificos sin comprobar el tipo.
// Ejemplo de ejecucion
// Valor recibido: TypeScript
// Objetivo
// Introducir unknown.
// Pista
// unknown puede contener cualquier valor, pero obliga a comprobarlo antes de usarlo

export{}

let x: unknown
x = 'hola'
x = 5

if (typeof(x) === 'string') {
    console.log(x)
} else if ( typeof(x) === 'number' ) {
    console.log(x)
}