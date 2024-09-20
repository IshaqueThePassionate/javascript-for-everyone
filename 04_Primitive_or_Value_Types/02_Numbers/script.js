
// 1. Basic Arithmetic Operations


let num1 = 10;
let num2 = 5;

let sum = num1 + num2;        // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2;     // Multiplication
let quotient = num1 / num2;    // Division

console.log("Sum: " + sum);                // Output: Sum: 15
console.log("Difference: " + difference);  // Output: Difference: 5
console.log("Product: " + product);        // Output: Product: 50
console.log("Quotient: " + quotient);      // Output: Quotient: 2




// 2. Working with Decimal (Floating-point) Numbers
let decimal1 = 3.5;
let decimal2 = 4.7;

let decimalSum = decimal1 + decimal2;
console.log("Decimal Sum: " + decimalSum);  // Output: Decimal Sum: 8.2




// 3. Special Numbers
let inf = 1 / 0;  // Division by zero returns Infinity
let negInf = -1 / 0;  // Negative division returns -Infinity
let notANumber = "hello" / 5;  // Invalid operation results in NaN

console.log("Infinity: " + inf);            // Output: Infinity: Infinity
console.log("Negative Infinity: " + negInf);// Output: Negative Infinity: -Infinity
console.log("NaN (Not a Number): " + notANumber);  // Output: NaN (Not a Number): NaN




// 4. Modulus Operator (Remainder of Division)
let modulus = num1 % num2;  // Remainder of 10 / 5
console.log("Modulus: " + modulus);  // Output: Modulus: 0
