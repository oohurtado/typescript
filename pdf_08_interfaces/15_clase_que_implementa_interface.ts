// Define una interface Printable con print(): void y crea una clase Invoice que la implemente.
// Requisitos
// - Usa implements.
// - La clase debe cumplir el contrato.
// Ejemplo de ejecucion
// Factura impresa
// Objetivo
// Practicar implementacion de interfaces en clases.
// Pista
// implements obliga a la clase a proporcionar los miembros requeridos

export{};

interface Printable {
    print():void
}

class Invoice implements Printable {
    
    id:number = 0;

    print(): void {
        console.log(this.id)
    }

}

let i1:Invoice = new Invoice()
i1.id=5
i1.print()