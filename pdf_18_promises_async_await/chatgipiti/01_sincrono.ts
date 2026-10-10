export{}

function esperar(ms:number) {
    const inicio = Date.now();

    while (Date.now() - inicio < ms) {
        // Bloquea el hilo mientras transcurre el tiempo.
    }
}

console.log('Inicio');

esperar(2000);

console.log('Pasaron 2 segundos');

console.log('Fin');

// Salida esperada:
// Inicio
// Pasaron 2 segundos
// Fin