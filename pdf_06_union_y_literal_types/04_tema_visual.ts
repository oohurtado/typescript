// Crea una variable theme que solo permita light o dark.
// Requisitos
// - Cambia el valor durante la ejecucion.
// - Muestra un mensaje segun el tema.
// Ejemplo de ejecucion
// Tema activo: dark
// Objetivo
// Practicar literales de string.
// Pista
// Los valores permitidos forman parte del tipo

export {};

type ThemeType = 'light' | 'dark'

let theme:ThemeType;

theme = 'dark'
console.log(theme)
theme = 'light'
console.log(theme)
