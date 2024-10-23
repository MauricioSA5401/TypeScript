"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Configurar la interfaz de entrada/salida
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para sumar
function sumar(a, b) {
    return a + b;
}
// Función para restar
function restar(a, b) {
    return a - b;
}
// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}
// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
// Función principal de la calculadora
function calculadora(a, b, operador) {
    switch (operador) {
        case "+":
            return sumar(a, b);
        case "-":
            return restar(a, b);
        case "*":
            return multiplicar(a, b);
        case "/":
            return dividir(a, b);
        default:
            return "Operador no válido. Usa +, -, * o /";
    }
}
// Capturar la entrada del usuario
rl.question('Ingresa el primer número: ', function (num1) {
    rl.question('Ingresa el segundo número: ', function (num2) {
        rl.question('Ingresa el operador (+, -, *, /): ', function (operador) {
            // Convertir los números ingresados de string a number
            var a = parseFloat(num1);
            var b = parseFloat(num2);
            try {
                var resultado = calculadora(a, b, operador);
                console.log("El resultado es: ".concat(resultado));
            }
            catch (error) {
                console.error(error.message);
            }
            // Cerrar la interfaz de entrada
            rl.close();
        });
    });
});
