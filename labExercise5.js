// Step 1: Create an array with 5 elements
let myArray = [10, 20, 30, 40, 50];

// Step 2: Replace the value at position 1 and 4
// (position 1 = index 0, position 4 = index 3)
myArray[0] = 100;
myArray[3] = 400;

// Step 3: Add a new element to the beginning
myArray.unshift(1);  // Adds 1 to the front

// Step 4: Remove the element at the end
myArray.pop();  // Removes the last element

// Step 5: Print the array to the console
console.log(myArray);  // Output: [5, 100, 20, 30, 400]
