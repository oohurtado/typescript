// Crea una clase BankAccount con owner y balance.
// Requisitos
// - Agrega deposit y withdraw.
// - No permitas cantidades invalidas.
// - No permitas retirar mas que el saldo.
// Ejemplo de ejecucion
// Saldo final: $1800
// Objetivo
// Practicar reglas dentro de metodos.
// Pista
// La clase puede proteger la consistencia de sus propios datos

export{};

class BankAccount {
    
    constructor(
        private owner:string, 
        private balance:number) 
    {}

    public deposit(money:number) {
        if (money <= 0) {
            console.log(`ERROR: cantidad negativa`)
            return
        }

        this.balance += money

        return this
    }

    public withdraw(money:number) {
        if (money <= 0) {
            console.log(`ERROR: cantidad negativa`)
            return
        }

        if (this.balance < money) {
            console.log('ERROR: balance insuficiente')
            return
        }

        this.balance -= money

        return this
    }

    public details() {
        console.log(`${this.owner}: ${this.balance}`)
    }
}

let ba = new BankAccount('oscar', 1000) // 1000
ba.deposit(500)?.details() // 1500
ba.deposit(-200)?.details() // 1500
ba.withdraw(1600)?.details() // 1500
ba.withdraw(300)?.details() // 1200
