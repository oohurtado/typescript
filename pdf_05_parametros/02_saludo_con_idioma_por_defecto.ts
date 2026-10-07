// Crea una funcion que reciba un nombre y un idioma. Si no se proporciona idioma, utiliza espanol.
// Requisitos
// - El nombre es obligatorio.
// - El idioma debe tener un valor por defecto.
// - Prueba con y sin segundo argumento.
// Ejemplo de ejecucion
// Hola, Ana
// Hello, Ana
// Objetivo
// Practicar valores por defecto.
// Pista
// El valor por defecto se asigna directamente en la declaracion del parametro

export{};

type Lang = 'en' | 'es' | '...'

function hi(name:string, lang:Lang) {
    if (lang === "en") {
        console.log(`Hi ${name}`)
    } else if (lang === "es") {
        console.log(`Hola, ${name}`)
    } else {
        console.log('...')
    }
}

hi('oscar', "en");
hi('oscar', "en");
hi('oscar', '...');