export{}

interface User {
    id: number;
    name: string;
}

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "number" &&
        "name" in value &&
        typeof value.name === "string"
    );
}

const value: unknown = {
    id: 1,
    name: "Ana"
};

if (isUser(value)) {
    console.log(`Usuario valido: ${value.name}`);
} else {
    console.log("Usuario inválido");
}