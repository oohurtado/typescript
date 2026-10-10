/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

async function obtenerUsuario() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

obtenerUsuario()
    .then(console.log)
    .catch(console.error);