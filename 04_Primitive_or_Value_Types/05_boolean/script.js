
// Basic Boolean values

let isTrue = true;
let isFalse = false;

console.log(isTrue);   // Output: true
console.log(isFalse);  // Output: false



// Boolean comparison examples

let a = 5;
let b = 10;

console.log(a > b);    // Output: false
console.log(a < b);    // Output: true



// Using Boolean in conditional statements

let age = 20;
let isAdult = age >= 18;
console.log(isAdult);  // Output: true


// Boolean logic with logical operators

let result = (a > 2) && (b < 20);  // Both conditions must be true
console.log(result);  // Output: true


result = (a > 2) || (b > 20);  // At least one condition must be true
console.log(result);  // Output: true


let notTrue = !isTrue;  // Negation
console.log(notTrue);   // Output: false
