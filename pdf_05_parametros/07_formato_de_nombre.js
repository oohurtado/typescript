// Crea una funcion que reciba nombre, apellido y una opcion booleana para mostrar primero el apellido. La
// opcion debe ser false por defecto.
// Requisitos
// - Nombre y apellido son obligatorios.
// - El boolean tiene valor por defecto.
// Ejemplo de ejecucion
// Oscar Hurtado
// Hurtado, Oscar
// Objetivo
// Practicar valores por defecto booleanos.
// Pista
// El valor booleano puede controlar el formato de salida
function showName(fn, ln, order = true) {
    if (order) {
        console.log(`${fn} ${ln}`);
    }
    else {
        console.log(`${ln} ${fn}`);
    }
}
showName('oscar', 'hurtado');
showName('oscar', 'hurtado', false);
export {};
