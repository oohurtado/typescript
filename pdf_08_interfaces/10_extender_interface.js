// Define Person con name y age. Crea Employee extendiendo Person y agregando employeeId y department.
// Requisitos
// - No repitas name y age.
// - Crea al menos dos empleados.
// Ejemplo de ejecucion
// 100 - Laura - Desarrollo
// Objetivo
// Practicar extends entre interfaces.
// Pista
// Una interface puede heredar miembros de otra
let e1 = {
    id: 1,
    age: 43,
    department: 'programacion',
    name: 'oscar'
};
function foo(p) {
    console.log(`${p.name} ${p.age}`);
}
foo(e1);
export {};
