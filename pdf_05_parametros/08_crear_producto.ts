// Crea una funcion que construya un producto recibiendo nombre, precio, stock y estado activo.
// Requisitos
// - Nombre y precio son obligatorios.
// - Stock debe ser 0 por defecto.
// - Activo debe ser true por defecto.
// Ejemplo de ejecucion
// Teclado - $850 - Stock: 0 - Activo: true
// Objetivo
// Usar varios valores por defecto.
// Pista
// Los parametros con valores por defecto normalmente se colocan despues de los obligatorios

export{};

function foo(name:string, price:number, stock:number, active:boolean = true) {
    console.log(`${name} $${price} (${stock}) | activo: ${active ? 'si' : 'no'}`)
}

foo('teclado', 349, 10)