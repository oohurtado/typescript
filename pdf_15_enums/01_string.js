// Crea un enum Day con los dias de la semana y declara una variable usando uno de sus valores.
// Requisitos
// - Usa enum.
// - Muestra el valor seleccionado.
// Ejemplo de ejecucion
// Dia seleccionado: Monday
// Objetivo
// Introducir la sintaxis de enum.
// Pista
// Los miembros numericos reciben valores automaticamente si no los especificas
var Day;
(function (Day) {
    Day["Sunday"] = "sun";
    Day["Monday"] = "mon";
    Day["Tuesday"] = "tue";
    Day["Wednesday"] = "wed";
    Day["Thursday"] = "thu";
    Day["Friday"] = "fri";
    Day["Saturday"] = "sat";
})(Day || (Day = {}));
console.log(Day.Friday);
export {};
