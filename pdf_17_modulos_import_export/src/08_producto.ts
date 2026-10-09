export default class Producto {
    constructor(
        public nombre: string,
        public precio: number
    ) {}

    obtenerDescripcion(): string {
        return `${this.nombre}: $${this.precio}`;
    }
}