//Lab Exercise 4 part 1

function add(a, b) {
  const result = a + b;
  console.log(`The result of addition is: ${result}`);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  console.log(`The result of subtraction is: ${result}`);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  console.log(`The result of multiplication is: ${result}`);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed.");
    return null;
  }
  const result = a / b;
  console.log(`The result of division is: ${result}`);
  return result;
}

// Example usage
add(10, 5);
subtract(10, 5);
multiply(10, 5);
divide(10, 5);

//Lab Exercise 4 Part 2
function printHello(name) {
  console.log(`Hello ${name}`);
}

printHello('Alice')

// Example usage:
greet("Alice");