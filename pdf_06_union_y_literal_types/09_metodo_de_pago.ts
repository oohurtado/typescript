// Define PaymentMethod con cash, card y transfer.
// Requisitos
// - Crea una funcion para procesar cada metodo.
// - No permitas otros valores.
// Ejemplo de ejecucion
// Pago mediante card
// Objetivo
// Modelar opciones cerradas.
// Pista
// Los literal types son utiles para estados y opciones

export{};

type PaymentMethod = 'cash' | 'card' | 'transfer'

function sale(method:PaymentMethod, amount: number) {
    
}