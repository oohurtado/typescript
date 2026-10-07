// Crea una interface Repository con metodos getAll y getById para productos.
// Requisitos
// - getAll devuelve Product[].
// - getById contempla que no exista el producto.
// Ejemplo de ejecucion
// Productos: 4
// Objetivo
// Practicar contratos de comportamiento.
// Pista
// Define claramente parametros y retornos
class ProductRepository {
    products = [
        { id: 1, name: "Mouse" },
        { id: 2, name: "Teclado" },
        { id: 3, name: "Monitor" },
        { id: 4, name: "Laptop" }
    ];
    getAll() {
        return this.products;
    }
    getById(id) {
        return this.products.find(product => product.id === id);
    }
}
let productRepository = new ProductRepository();
console.log(productRepository.getAll());
console.log(productRepository.getById(1));
export {};
