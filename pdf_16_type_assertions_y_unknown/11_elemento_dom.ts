// Supone que obtienes un elemento del DOM y necesitas tratarlo como HTMLInputElement.
// Requisitos
// - Usa una type assertion apropiada.
// - Lee la propiedad value.
// - Considera que en una aplicacion real el elemento podria ser null.
// Ejemplo de ejecucion
// Valor del input: Oscar
// Objetivo
// Practicar un uso comun de assertions en frontend.
// Pista
// Las APIs del DOM suelen devolver tipos mas generales

export{}
const elemento = document.getElementById("nombre");

if (elemento !== null) {
  const input = elemento as HTMLInputElement;
  console.log(`Valor del input: ${input.value}`);
}