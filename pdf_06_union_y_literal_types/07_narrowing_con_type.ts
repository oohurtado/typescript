// Crea una funcion que reciba string | number. Si recibe string, devuelve su longitud; si recibe number, devuelve
// su doble.
// Requisitos
// - Usa typeof.
// - No hagas conversiones innecesarias.
// Ejemplo de ejecucion
// Hola -> 4
// 10 -> 20
// Objetivo
// Practicar type narrowing.
// Pista
// Despues de typeof TypeScript conoce el tipo concreto

export{};
function foo(val:number|string):number {
    if (typeof(val) === 'string') {
        return val.length
    } else {
        return val * 2
    }
}

console.log(foo(911))
console.log(foo('911'))