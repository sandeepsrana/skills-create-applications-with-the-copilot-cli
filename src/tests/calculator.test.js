const { add, subtract, multiply, divide } = require("../calculator");

// Tests based on image examples: 2+3, 10-4, 45*2, 20/5
describe("Calculator - Image Examples", () => {
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe("Addition", () => {
  test("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

describe("Subtraction", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-1, -2)).toBe(1);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test("subtracts a number from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("Multiplication", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });
});

describe("Division", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides with a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides a positive by a negative number", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(8, 1)).toBe(8);
  });

  test("divides decimal numbers", () => {
    expect(divide(5.5, 2.2)).toBeCloseTo(2.5);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});
