// Crea una funcion que reciba nombre, edad y ciudad opcional y devuelva una descripcion.
// Requisitos- Nombre y edad son obligatorios.- Ciudad es opcional.- Maneja el caso donde no exista ciudad.
// Ejemplo de ejecucion
// Ana, 25 anos, ciudad no especificada
// Objetivo
// Combinar parametros obligatorios y opcionales.
// Pista
// Comprueba si el parametro opcional contiene un valor
function desc(nombre, edad, ciudad) {
    ciudad = ciudad === undefined ? 'ciudad no especificada' : `de ${ciudad}`;
    console.log(`${nombre}, ${edad} años, ${ciudad}`);
}
desc('oscar', 43, 'cd del carmen');
desc('oscar', 43);
export {};
