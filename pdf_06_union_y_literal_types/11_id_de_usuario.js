"use strict";
// Define un type UserId que acepte string | number y usalo en un objeto User.
// Requisitos
// - Crea usuarios con ambos tipos de id.
// - No dupliques la union en cada lugar.
// Ejemplo de ejecucion
// 1 - Ana
// USR-2 - Carlos
// Objetivo
// Reutilizar union types mediante alias.
// Pista
// Un type alias evita repetir tipos complejos
let users = [];
users.push({
    id: 123,
    name: 'Oscar'
}, {
    id: 'user-123',
    name: 'nahara'
});
users.forEach(p => console.log(`${p.id} ${p.name}`));
