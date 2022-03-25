// En esta archivo se crea las funciones de una calculadora con las operaciones basicas + - * / 

//Importacion de Modulos, 
//Delcaracion de Variable, 
//Declaracion de Funciones,

// Funcion sumar

function sumNumbers( numberOne = 0 , numberTwo = 0 ){

    let Result = numberOne + numberTwo;
    return  Result;
}
// Funcion restar
function subtractNumbers( numberOne = 0 , numberTwo = 0 ){

    let Result = numberOne - numberTwo;
    return  Result;
}
// Funcion multiplicar
function multiplyNumbers( numberOne = 0 , numberTwo = 0 ){

    let Result = numberOne * numberTwo;
    return  Result;
}
// dividir dos numeros
function divideNumbers( numberOne = 0 , numberTwo = 0 ){

    let Result = numberOne / numberTwo;
    return  Result;
}

//Ejecucion del Codigo

export{
    sumNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}