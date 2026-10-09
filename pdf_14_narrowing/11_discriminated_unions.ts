// Modela Success y Failure con una propiedad type que contenga success o error.
// Requisitos
// - Crea Result como union.
// - Procesa ambas variantes mediante type.
// Ejemplo de ejecucion
// Resultado correcto
// Error: operacion fallida
// Objetivo
// Practicar discriminated unions.
// Pista
// Una propiedad literal comun puede identificar cada variante

export{}

interface Success {
    type: "success";
    message: string;
}

interface Failure {
    type: "error";
    message: string;
}

type Result = Success | Failure;

function processResult(result: Result): void {
    if (result.type === "success") {
        console.log("Resultado correcto");
    } else {
        console.log(`Error: ${result.message}`);
    }
}

const success: Success = {
    type: "success",
    message: "Operación completada"
};

const failure: Failure = {
    type: "error",
    message: "operacion fallida"
};

processResult(success);
processResult(failure);