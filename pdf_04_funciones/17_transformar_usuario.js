// Crea una funcion que reciba una lista de usuarios y devuelva un array con sus nombres completos.
// Requisitos- Cada usuario tiene firstName y lastName.- El resultado debe ser string[].
// Ejemplo de ejecucion
// Laura Garcia
// Carlos Lopez
// Objetivo
// Practicar transformaciones mediante funciones.
// Pista
// map es util cuando cada elemento produce otro valor
let tmp = [{ firsName: 'oscar', lastName: 'hurtado' }, { firsName: 'naharta', lastName: 'brizuela' }];
function transform1(users) {
    let result = users.map(p => `${p.firsName} ${p.lastName}`);
    return result;
}
function transform2(users) {
    let result = users.map(p => ({
        name: `${p.firsName} ${p.lastName}`,
        long: `${p.firsName} ${p.lastName}`.length
    }));
    return result;
}
console.log(transform1(tmp));
console.log(transform2(tmp));
export {};
