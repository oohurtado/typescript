// Crea un alias Address y despues un alias Customer que contenga una propiedad address de ese tipo.
// Requisitos
// - Address contiene street, city y zipCode.
// - Customer contiene id, name y address.
// Ejemplo de ejecucion
// Cliente: Laura | Ciudad: Guadalajara
// Objetivo
// Practicar composicion de tipos.
// Pista
// Divide estructuras grandes en tipos pequenos reutilizables
const customer = {
    id: 1,
    name: "Laura",
    address: {
        street: "Av. Reforma",
        city: "Guadalajara",
        zipCode: "44100"
    }
};
console.log(`Cliente: ${customer.name} | Ciudad: ${customer.address.city}`);
export {};
