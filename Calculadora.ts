// Función para sumar
function sumar(a: number, b: number): number {
    return a + b;
}

// Función para restar
function restar(a: number, b: number): number {
    return a - b;
}

// Función para multiplicar
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Función para dividir
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

// Función principal de la calculadora
function calculadora(a: number, b: number, operador: string): number | string {
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

// Ejemplo de uso
const num1 = 10;
const num2 = 5;

console.log("Suma:", calculadora(num1, num2, "+")); // Resultado: 15
console.log("Resta:", calculadora(num1, num2, "-")); // Resultado: 5
console.log("Multiplicación:", calculadora(num1, num2, "*")); // Resultado: 50
console.log("División:", calculadora(num1, num2, "/")); // Resultado: 2
