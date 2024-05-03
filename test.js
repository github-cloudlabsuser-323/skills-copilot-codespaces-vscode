class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from the file

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('add method adds two numbers correctly', () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test('subtract method subtracts two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiply method multiplies two numbers correctly', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });

  test('divide method divides two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('divide method throws error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });
});