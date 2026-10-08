// Crea Animal con makeSound y crea Dog y Cat sobrescribiendo ese metodo.
// Requisitos
// - Usa override si tu configuracion lo requiere.
// - Cada clase devuelve un sonido diferente.
// Ejemplo de ejecucion
// Dog: Guau
// Cat: Miau
// Objetivo
// Practicar method overriding.
// Pista
// Una subclase puede proporcionar su propia implementacion
class Animal {
    makeSound() {
        console.log('sonido');
    }
    rest() {
        console.log('resting');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('guau');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('miau');
    }
}
let d = new Dog();
let c = new Cat();
d.makeSound();
c.makeSound();
d.rest();
c.rest();
export {};
