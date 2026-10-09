
/* importa constantes con alias */
import * as mensajes from './02_mensajes';
console.log(mensajes.MENSAJE);
console.log(mensajes.NUMERO);

console.log('*************************')

/* importa funciones con alias */
import * as utilidades from './03_utilidades';
console.log(utilidades.IVA);
console.log(utilidades.calcularPrecioConIVA(100));
console.log(utilidades.saludar('Carlos'));

console.log('*************************')

/* importa funciones con alias */
import * as inventario from './04_inventario';
inventario.mostrarProductos();

console.log('*************************')

/* importa cosas especificas */
import { PI, sumar, restar } from './05_calculadora';
console.log(PI);
console.log(sumar(10, 5));
console.log(restar(10, 5));
import * as calc from './05_calculadora';
console.log(calc.PI);
console.log(calc.sumar(10, 5));
console.log(calc.restar(10, 5));

console.log('*************************')

/* se exporta hasta el final del archivo */
import { MULTIPLICADOR, multiplicar } from './06_operaciones';
console.log(MULTIPLICADOR);
console.log(multiplicar(4, 5));

console.log('*************************')

/* se exporta con alias*/
import { APP_NAME } from './07_configuracion';
console.log(APP_NAME);

console.log('*************************')

/* se exporta default sin llaves (una cosa) */
import Producto from './08_producto';
const producto = new Producto('Laptop', 15000);
console.log(producto.obtenerDescripcion());

console.log('*************************')

/* se importa default y named exports */
import Usuario, { VERSION, validarNombre } from './09_usuario';
const usuario = new Usuario('Carlos');
console.log(usuario.obtenerNombre());
console.log(VERSION);
console.log(validarNombre(usuario.obtenerNombre()));

console.log('*************************')

console.log(
`
    ./10_utilidades.ts: busca el archivo en la misma carpeta.
    ../10_utilidades.ts: sube una carpeta y después busca el archivo.
    ./utilidades/10_utilidades.ts: busca dentro de una subcarpeta llamada utilidades.
    `    
)

console.log('*************************')

import {
    sumarXY,
    restarXY,
    convertirMayusculas,
    saludar
} from './10_index';

console.log(sumarXY(10, 5));
console.log(restarXY(10, 5));
console.log(convertirMayusculas('typescript'));
console.log(saludar('Carlos'));