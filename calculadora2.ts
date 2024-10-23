import * as readline from 'readline';

// Configurar la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

// Capturar la entrada del usuario
rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
        rl.question('Ingresa el operador (+, -, *, /): ', (operador) => {
            // Convertir los números ingresados de string a number
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            try {
                const resultado = calculadora(a, b, operador);
                console.log(`El resultado es: ${resultado}`);
            } catch (error) {
                console.error(error.message);
            }
            
            // Cerrar la interfaz de entrada
            rl.close();
        });
    });
});
