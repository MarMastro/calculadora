function calculadora(num1, operador, num2){
    let resultado;
    switch(operador){
        case "+": resultado = num1 + num2;
        break;
        case "-": resultado = num1 - num2;
        break;
        case "*": resultado = num1 * num2;
        break;
        case "/": resultado = num1 / num2;
        break;
        default: resultado = "No es un valor válido";
        break;
    };
    console.log(resultado);
};

num1 = parseInt(prompt("Ingresa el primer valor"));
operador = prompt("Ingrese un operador");
num2 = parseInt(prompt("Ingresa el segundo valor"));

console.log(num1, num2);

calculadora(num1, operador, num2);
