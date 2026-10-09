// Define Cat y Dog con propiedades diferentes. Crea una funcion que reciba Cat | Dog y determine el tipo usando
// in.
// Requisitos
// - No uses typeof para distinguir objetos.
// - Accede a una propiedad exclusiva de cada tipo.
// Ejemplo de ejecucion
// El perro ladra
// Objetivo
// Practicar el operador in.
// Pista
// Comprueba la existencia de una propiedad exclusiva

export{}
interface Cat {
    name: string;
    meow: () => string;
}

interface Dog {
    name: string;
    bark: () => string;
}

function makeSound(animal: Cat | Dog): void {
    if ("bark" in animal) {
        console.log(`El perro ladra: ${animal.bark()}`);
    } else {
        console.log(`El gato maúlla: ${animal.meow()}`);
    }
}

const dog: Dog = {
    name: "Firulais",
    bark: () => "Guau"
};

makeSound(dog);