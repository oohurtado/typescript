export default class Usuario {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    obtenerNombre(): string {
        return this.nombre;
    }
}

export const VERSION = 1;

export function validarNombre(nombre: string): boolean {
    return nombre.length > 0;
}