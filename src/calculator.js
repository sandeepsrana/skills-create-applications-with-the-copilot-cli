/**
 * Node.js CLI Calculator
 *
 * Supported operations (basic arithmetic):
 *   - add       : Addition (+)
 *   - subtract  : Subtraction (−)
 *   - multiply  : Multiplication (×)
 *   - divide    : Division (÷)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 2 3        => Result: 5
 *   node calculator.js subtract 10 4  => Result: 6
 *   node calculator.js multiply 3 7   => Result: 21
 *   node calculator.js divide 20 5    => Result: 4
 */

// Addition: sum two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: find the difference between two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: compute the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divide first number by second (with zero-division handling)
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide };

// CLI execution (only when run directly)
if (require.main === module) {
  const args = process.argv.slice(2);
  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  // Validate input
  if (!operation || isNaN(num1) || isNaN(num2)) {
    console.error("Usage: node calculator.js <operation> <num1> <num2>");
    console.error("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  let result;

  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      try {
        result = divide(num1, num2);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unknown operation '${operation}'.`);
      console.error("Valid operations: add, subtract, multiply, divide");
      process.exit(1);
  }

  console.log(`Result: ${result}`);
}
