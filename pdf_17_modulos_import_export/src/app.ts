import * as mensajes from './02_mensajes';
console.log(mensajes.MENSAJE);
console.log(mensajes.NUMERO);

console.log('*************************')

import * as utilidades from './03_utilidades';
console.log(utilidades.IVA);
console.log(utilidades.calcularPrecioConIVA(100));
console.log(utilidades.saludar('Carlos'));

console.log('*************************')

import * as inventario from './04_inventario';
inventario.mostrarProductos();

console.log('*************************')

import { PI, sumar, restar } from './05_calculadora';
console.log(PI);
console.log(sumar(10, 5));
console.log(restar(10, 5));
import * as calc from './05_calculadora';
console.log(calc.PI);
console.log(calc.sumar(10, 5));
console.log(calc.restar(10, 5));

console.log('*************************')

import { MULTIPLICADOR, multiplicar } from './06_operaciones';
console.log(MULTIPLICADOR);
console.log(multiplicar(4, 5));

console.log('*************************')

import { APP_NAME } from './07_configuracion';
console.log(APP_NAME);