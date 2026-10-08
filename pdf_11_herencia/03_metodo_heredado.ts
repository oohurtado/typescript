// Crea Animal con un metodo eat. Crea Dog heredando de Animal y agrega bark.
// Requisitos
// - Dog debe poder usar eat sin redefinirlo.
// - Ejecuta ambos metodos.
// Ejemplo de ejecucion
// El animal esta comiendo
// Guau
// Objetivo
// Reutilizar comportamiento heredado.
// Pista
// Los metodos publicos se heredan

export {};

class Animal {
    
    eat() {
        console.log('eat')        
    }

}

class Dog extends Animal {

    bark() {
        console.log('wuf wuf')
    }

}

let dog = new Dog()
dog.eat() // heredado
dog.bark() // propio