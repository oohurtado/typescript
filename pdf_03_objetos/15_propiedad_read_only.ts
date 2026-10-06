// Representa una cuenta cuyo id no deba cambiar despues de ser creada.
// Requisitos
// - El id debe ser de solo lectura.
// - Otras propiedades si pueden modificarse.
// - Incluye como comentario un intento invalido de cambiar el id.
// Ejemplo de ejecucion
// Cuenta 100 - Saldo: $2500
// Objetivo
// Practicar propiedades readonly.
// Pista
// readonly impide reasignar una propiedad despues de su inicializacion

class Cuenta {
    
    constructor(
        private readonly id: string,
        private nombre: string,
        private saldo: number
    ) {}

    public updateSaldo(saldo:number) {
        this.saldo = saldo        
    }
}

export {};