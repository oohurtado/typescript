// Representa un empleado que contenga informacion basica y un objeto company con nombre y departamento.
// Requisitos- Usa objetos anidados.- Muestra una descripcion combinando ambos niveles.
// Ejemplo de ejecucion
// Carlos trabaja en DevSoft - Desarrollo
// Objetivo
// Reforzar acceso a propiedades anidadas.
// Pista
// Accede a las propiedades usando varios niveles con punto

export{};

class Empleado {
    
    constructor(
        private nombre: string,
        private empresa: Empresa
    ) {        
    }
}

class Empresa {

    constructor(
        private nombre: string,
        private depto: string,
    ) {        
    }
}

let p = new Empleado('oscar hurtado', new Empresa('coca cola', 'desarrollo'));
console.log(p)