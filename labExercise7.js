// ======================
// Function Definitions
// ======================

/**
 * Adds two numbers and returns the result.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    const result = a + b;
    console.log(`The result of addition is: ${result}`);
    return result;
  }
  
  /**
   * Subtracts the second number from the first and returns the result.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} The result of a - b
   */
  function subtract(a, b) {
    const result = a - b;
    console.log(`The result of subtraction is: ${result}`);
    return result;
  }
  
  /**
   * Multiplies two numbers and returns the result.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} The product of a and b
   */
  function multiply(a, b) {
    const result = a * b;
    console.log(`The result of multiplication is: ${result}`);
    return result;
  }
  
  /**
   * Divides the first number by the second and returns the result.
   * If b is zero, logs an error and returns null.
   * @param {number} a - Numerator
   * @param {number} b - Denominator
   * @returns {number|null} The result of a / b or null if b is zero
   */
  function divide(a, b) {
    if (b === 0) {
      console.log("Error: Division by zero is not allowed.");
      return null;
    }
    const result = a / b;
    console.log(`The result of division is: ${result}`);
    return result;
  }
  
  /**
   * Prints a greeting with the given name.
   * @param {string} name - The name to greet
   */
  function printHello(name) {
    console.log(`Hello ${name}`);
  }
  
  // ======================
  // Unit Tests
  // ======================
  
  // ---- Tests for add ----
  console.log("Add Tests:");
  console.assert(add(5, 3) === 8, "Test 1 failed");
  console.assert(add(-5, 5) === 0, "Test 2 failed");
  console.assert(add(1.5, 2.5) === 4.0, "Test 3 failed");
  
  // ---- Tests for subtract ----
  console.log("Subtract Tests:");
  console.assert(subtract(10, 3) === 7, "Test 1 failed");
  console.assert(subtract(0, 10) === -10, "Test 2 failed");
  console.assert(subtract(5.5, 2.2) === 3.3, "Test 3 failed");
  
  // ---- Tests for multiply ----
  console.log("Multiply Tests:");
  console.assert(multiply(4, 5) === 20, "Test 1 failed");
  console.assert(multiply(-2, 3) === -6, "Test 2 failed");
  console.assert(multiply(0.5, 2) === 1.0, "Test 3 failed");
  
  // ---- Tests for divide ----
  console.log("Divide Tests:");
  console.assert(divide(10, 2) === 5, "Test 1 failed");
  console.assert(divide(7, 2) === 3.5, "Test 2 failed");
  console.assert(divide(5, 0) === null, "Test 3 failed (division by zero)");
  
  // ---- Test for printHello ----
  console.log("printHello Test:");
  printHello("Alice");  // Output: Hello Alice
  