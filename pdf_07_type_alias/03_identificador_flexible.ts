// Crea un alias Id que permita number o string.
// Requisitos
// - Crea identificadores de ambos tipos.
// - Usa el alias en una funcion.
// Ejemplo de ejecucion
// 100
// USR-100
// Objetivo
// Combinar type aliases con union types.
// Pista
// El lado derecho del alias puede ser una union

export{};

type Id = number|string;

let id:Id;
id = 1;
id = '1'