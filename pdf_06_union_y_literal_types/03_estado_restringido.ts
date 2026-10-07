// Crea un tipo Status que solo acepte pending, approved o rejected.
// Requisitos
// - Crea varias variables validas.
// - Incluye como comentario un valor invalido.
// Ejemplo de ejecucion
// Estado: approved
// Objetivo
// Practicar literal types.
// Pista
// No uses string general

export{};

type StatusType = 'pending' | 'approved' | 'rejected'
let status:StatusType;
status = 'approved'
status = "pending"
// status = 'accepter' // error ya que no se encuentra en StatusType