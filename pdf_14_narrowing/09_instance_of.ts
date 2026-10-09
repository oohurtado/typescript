// Crea clases Dog y Cat y una funcion que reciba Dog | Cat.
// Requisitos
// - Usa instanceof.
// - Ejecuta un metodo especifico de cada clase.
// Ejemplo de ejecucion
// Dog: Guau
// Objetivo
// Practicar narrowing con clases.
// Pista
// instanceof funciona con valores que existen en runtime

export{}

class Dog {
    bark(): string {
        return "Guau";
    }
}

class Cat {
    meow(): string {
        return "Miau";
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        console.log(`Dog: ${animal.bark()}`);
    } else {
        console.log(`Cat: ${animal.meow()}`);
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);