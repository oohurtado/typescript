/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

function esperar() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Terminé"), 2000);
    });
}

async function iniciar() {
    console.log("A");
    const resultado = await esperar();
    console.log(resultado);
}

await iniciar();
console.log("B");

// salida: A, B, Terminé // sin await en iniciar()
// salida: A, Terminé, B // con await en iniciar()