
// Crea una clase base con una propiedad private y otra protected. Crea una clase hija e intenta usar ambas.
// Requisitos
// - Deja como comentario el acceso invalido.
// - Demuestra cual propiedad si puede utilizar la clase hija.
// Ejemplo de ejecucion
// Propiedad protected accesible desde la subclase
// Objetivo
// Distinguir private de protected.
// Pista
// private no esta disponible directamente en una subclase

class Parent {
    
    private privado:string = ''
    protected protegido:string = ''
    
    constructor() {}
}

class Child extends Parent {
    public task() {
        // this.privado = '' // ERROR es privado
        this.protegido = ''
    }
}