// Crea un pequeño programa que almacene los datos de una cuenta: identificador, propietario, saldo, tipo de
// cuenta y estado. Despues muestra un resumen y determina si puede realizar una compra dada.
// Requisitos- El identificador puede ser string o number.- El tipo de cuenta solo puede ser basic, premium o business.- El estado solo puede ser active o blocked.- No uses any.- La compra solo puede realizarse si la cuenta esta activa y tiene saldo suficiente.
// Ejemplo de ejecucion
// Cuenta: ACC-10 | Propietario: Mario | Tipo: premium | Saldo: 2500
// Compra de 1800: permitida
// Objetivo
// Integrar los conceptos principales del tema Variables y tipos.
// Pista
// Define primero los tipos posibles y despues escribe la logica

let id:string = "123";
let owner:string = "Oscar Hurtado";
let money:number= 300;
let accountType: "basic" | "premium" | "business"
let state: boolean = true;