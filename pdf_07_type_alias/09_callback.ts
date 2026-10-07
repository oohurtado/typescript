// Define un alias MessageCallback para una funcion que reciba un string y no devuelva valor.
// Requisitos
// - Crea una funcion que reciba el callback.
// - Ejecuta el callback con un mensaje.
// Ejemplo de ejecucion
// Operacion completada
// Objetivo
// Usar aliases para callbacks.
// Pista
// El retorno void representa una funcion sin valor util de retorno

export{};

type MessageCallback = (text:string) => void;

function foo(method:MessageCallback, message:string) : void {
    method(message);
}

foo((a) => console.log(a), 'Hola')
foo((a) => console.log(a.length), 'Hola')