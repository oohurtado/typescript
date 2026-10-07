// Crea un alias Coordinate para representar un objeto con x e y numericos.
// Requisitos
// - Crea al menos tres coordenadas.
// - Muestra sus valores.
// Ejemplo de ejecucion
// X: 10 | Y: 25
// Objetivo
// Practicar alias de objetos.
// Pista
// Un type puede describir directamente la estructura de un objeto

export{};
type Coordinate = {
    x:number
    y:number
}

let pos:Coordinate = {x:1,y:2}
pos.x = 2
pos.y = 1
