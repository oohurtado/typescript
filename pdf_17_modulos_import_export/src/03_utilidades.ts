export const IVA = 0.16;

export function calcularPrecioConIVA(precio: number): number {
    return precio + (precio * IVA);
}

export function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}