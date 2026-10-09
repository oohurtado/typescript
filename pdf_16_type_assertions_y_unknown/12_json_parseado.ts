// Parsea un string JSON y trata el resultado inicialmente como unknown.
// Requisitos
// - Valida antes de usar propiedades.
// - El JSON representa un User con id y name.
// - No confies solamente en una assertion.
// Ejemplo de ejecucion
// Usuario: Ana
// Objetivo
// Practicar datos externos.
// Pista
// Que el JSON tenga TypeScript escrito alrededor no garantiza su estructura en runtime

export{}

interface User {
  id: number;
  name: string;
}

function esUser(valor: unknown): valor is User {
  if (typeof valor !== "object" || valor === null) {
    return false;
  }

  if (!("id" in valor) || !("name" in valor)) {
    return false;
  }

  return (
    typeof valor.id === "number" &&
    typeof valor.name === "string"
  );
}

const json = '{"id": 1, "name": "Ana"}';

try {
  const resultado: unknown = JSON.parse(json);

  if (esUser(resultado)) {
    console.log(`Usuario: ${resultado.name}`);
  } else {
    console.log("El JSON no tiene la estructura esperada");
  }
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(`Error al parsear JSON: ${error.message}`);
  } else {
    console.log("Ocurrió un error desconocido");
  }
}