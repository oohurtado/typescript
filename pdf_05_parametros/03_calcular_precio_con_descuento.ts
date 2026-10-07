// Crea una funcion que reciba un precio y un porcentaje de descuento cuyo valor por defecto sea 0.
// Requisitos
// - Ambos valores son number.
// - La funcion devuelve el precio final.
// Ejemplo de ejecucion
// Precio final: 900
// Objetivo
// Usar valores por defecto en calculos.
// Pista
// Si no se envia descuento, el precio debe permanecer igual

export{};
function descuento(precio:number, porcentaje:number = 0) {
    if (porcentaje == 0) {
        return precio;
    }

    porcentaje = porcentaje / 100
    precio = precio - (precio*porcentaje)
    return precio
}

console.log(descuento(100))
console.log(descuento(100,10))