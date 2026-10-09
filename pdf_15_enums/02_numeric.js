// Crea un enum Status con Pending, Approved y Rejected.
// Requisitos
// - Muestra el valor numerico de cada miembro.
// - Declara una variable Status.
// Ejemplo de ejecucion
// Pending: 0 | Approved: 1 | Rejected: 2
// Objetivo
// Comprender enums numericos.
// Pista
// Por defecto comienzan en 0
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
console.log(`${Status[0]} ${Status.Pending}`);
export {};
