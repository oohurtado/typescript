"use strict";
// Crea una funcion que reciba un valor string o number y lo muestre.
// Requisitos
// - Tipa el parametro con una union.
// - Prueba ambos tipos.
// Ejemplo de ejecucion
// Valor: 25
// Valor: TypeScript
// Objetivo
// Usar unions en parametros.
// Pista
// Un parametro puede aceptar mas de un tipo
function message(text) {
    console.log(typeof (text));
}
message(911);
message('911');
export{};