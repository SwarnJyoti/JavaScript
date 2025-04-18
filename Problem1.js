const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a); 
    this.b = parseFloat(b); 
    this.operation = operation.toLowerCase(); 
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        return this.b !== 0 ? this.a / this.b : "Error: Division by zero";
      default:
        return "Error: Invalid operation";
    }
  }
}


rl.question("Enter first number (a): ", (a) => {
  rl.question("Enter second number (b): ", (b) => {
    rl.question("Enter operation (add, subtract, multiply, divide): ", (operation) => {
      const calculator = new Calculator(a, b, operation);
      const result = calculator.calculate();
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
