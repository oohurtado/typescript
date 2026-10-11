/// <reference lib="es2015.promise" />
export{}; // Evita conflictos de nombres en el ámbito global

function validarEdad(edad:number) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve('Registro permitido');
        } else {
            reject(new Error('Debes ser mayor de edad'));
        }
    });
}

validarEdad(20)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error.message));