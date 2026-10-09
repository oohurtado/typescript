// Define User y crea isUser(value: unknown): value is User.
// Requisitos
// - Comprueba que sea objeto no nulo.
// - Valida id y name.
// - Usa el guard antes de acceder a User.
// Ejemplo de ejecucion
// Usuario valido: Carlos
// Objetivo
// Convertir validacion repetida en un type guard.

export{}

interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("id" in value) || !("name" in value)) {
    return false;
  }

  return (
    typeof value.id === "number" &&
    typeof value.name === "string"
  );
}

const dato: unknown = {
  id: 1,
  name: "Carlos"
};

if (isUser(dato)) {
  console.log(`Usuario valido: ${dato.name}`);
} else {
  console.log("Usuario invalido");
}