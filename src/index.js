
// En este ejercicio vamos hacer las operaciones basicas de una calculadora

import { divideNumbers, multiplyNumbers, subtractNumbers, sumNumbers } from "./js/arithmeticalOperations.js";

//Importacion de Modulos, 

//Delcaracion de Variable, 

const  numberOne = 5 , 
       numberTwo = 10
//Declaracion de Funciones,

//Ejecucion del Codigo

console.log('Operaciones basicas de la calculadora \n +  -  *  /');

console.log(`${numberOne}  + ${numberTwo}  = ` , sumNumbers(5,10));
console.log(`${numberOne}  - ${numberTwo}  = ` , subtractNumbers(5,10));
console.log(`${numberOne}  * ${numberTwo}  = ` , multiplyNumbers(5,10));
console.log(`${numberOne}  / ${numberTwo}  = ` , divideNumbers(5,10));


