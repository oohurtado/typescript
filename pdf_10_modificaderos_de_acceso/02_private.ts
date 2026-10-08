// Crea una clase BankAccount con una propiedad privada balance.
// Requisitos- No accedas directamente a balance desde fuera.- Agrega un metodo para consultar el saldo.
// Ejemplo de ejecucion
// Saldo: $2500
// Objetivo
// Practicar private.
// Pista
// Los miembros private solo son accesibles dentro de la clase

export {}

class BankAccount {
    constructor(private balance:number) {}

    getBalance = () => this.balance;
}