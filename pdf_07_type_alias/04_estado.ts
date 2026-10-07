// Crea un alias Status que solamente permita active, inactive o blocked.
// Requisitos
// - Declara varias variables Status.
// - Incluye como comentario un valor invalido.
// Ejemplo de ejecucion
// Estado: active
// Objetivo
// Usar aliases para literal types.
// Pista
// Es util nombrar conjuntos cerrados de valores

export{};
type Status = 'active' | 'inactive' | 'blocked'
let status:Status = 'active'
status = 'blocked'