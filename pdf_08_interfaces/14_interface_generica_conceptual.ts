// Define interfaces UserResponse y ProductResponse con success, message y data del tipo correspondiente.
// Requisitos
// - No uses any.
// - Compara las partes repetidas.
// - Todavia no es necesario usar generics.
// Ejemplo de ejecucion
// Respuesta de usuario recibida
// Objetivo
// Identificar estructuras que posteriormente pueden generalizarse.
// Pista
// Observa que cambia data pero se repite el resto

export {};

export {};

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
}

interface UserResponse {
    success: boolean;
    message: string;
    data: User;
}

interface ProductResponse {
    success: boolean;
    message: string;
    data: Product;
}

const response: UserResponse = {
    success: true,
    message: "Respuesta de usuario recibida",
    data: {
        id: 1,
        name: "Laura"
    }
};

console.log(response.message);