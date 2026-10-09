import * as catalogo from './04_productos';

export function mostrarProductos(): void {
    catalogo.productos.forEach(producto => {
        console.log(`${producto.nombre}: $${producto.precio}`);
    });
}