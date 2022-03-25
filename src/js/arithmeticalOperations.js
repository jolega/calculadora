// En esta archivo se crea las funciones de una calculadora con las operaciones basicas + - * / 

//Importacion de Modulos, 
//Delcaracion de Variable, 
//Declaracion de Funciones,

// Funcion sumar

function sumNumbers( numberOne = 0 , numberTwo = 0 ){

    return numberOne + numberTwo;
}
// Funcion restar
function subtractNumbers( numberOne = 0 , numberTwo = 0 ){

    let result = numberOne - numberTwo;
    return  result;
}
// Funcion multiplicar
function multiplyNumbers( numberOne = 0 , numberTwo = 0 ){

    let result = numberOne * numberTwo;
    return  result;
}
// dividir dos numeros
function divideNumbers( numberOne = 0 , numberTwo = 0 ){

    let result = numberOne / numberTwo;
    return  result;
}

function OperationsArishemetical ( numberOne = 0 , numberTwo = 0 , operacion){

// condiciones para operar 

}

//Ejecucion del Codigo

export{
    sumNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}