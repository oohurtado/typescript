// Define una prioridad que solo acepte low, medium o high y crea una funcion que la reciba.
// Requisitos
// - Maneja las tres posibilidades.
// - Devuelve un mensaje.
// Ejemplo de ejecucion
// high -> Atender inmediatamente
// Objetivo
// Combinar literales con funciones.
// Pista
// Un switch puede ayudarte

export{};
type Priority = 'low' | 'medium' | 'high'

function handler(type:Priority): string {
    if ( type === 'low' ) {
        return 'Atender mas tarde'
    } else if ( type === 'medium' ) {
        return 'Atender lo antes posible'
    } else if ( type === 'high') {
        return 'Atender inmediatamente'
    }

    return ''
}

console.log(handler('low'))