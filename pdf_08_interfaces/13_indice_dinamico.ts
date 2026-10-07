// Define una interface para un diccionario de configuracion cuyas claves sean dinamicas y sus valores string.
// Requisitos
// - Agrega varias configuraciones.
// - Consulta valores por clave.
// Ejemplo de ejecucion
// apiUrl: localhost
// Objetivo
// Practicar index signatures.
// Pista
// Usa una firma de indice cuando no conoces todas las claves

export {};

interface Config {
    [key: string]: string;
}

const config: Config = {
    apiUrl: "localhost",
    environment: "development",
    version: "1.0",
    database: "mydb"
};

console.log(`apiUrl: ${config["apiUrl"]}`);
console.log(`environment: ${config["environment"]}`);