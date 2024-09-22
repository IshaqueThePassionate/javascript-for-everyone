
// Simple do...while loop

let count = 1;
do {
    console.log("Count is: " + count);  // Executes at least once
    count++;
} while (count <= 5);  // Loop continues as long as count is less than or equal to 5



// Example with user input

let number;
do {
    number = prompt("Enter a number greater than 10:");
} while (number <= 10);  // Keeps prompting until a number greater than 10 is entered



// Example of a do...while loop with a break condition

let i = 0;
do {
    console.log("i is: " + i);
    if (i === 3) {
        break;  // Breaks the loop when i is 3
    }
    i++;
} while (i < 10);



// do...while loop that runs only once because the condition is false initially

let x = 10;
do {
    console.log("This will be printed once, even if the condition is false.");
} while (x < 5);  // Condition is false, but the loop still executes once



// Example 1: Summing numbers with do...while loop

let sum = 0;
let num = 1;
do {
    sum += num;  // Adds the current number to the sum
    num++;
} while (num <= 10);  // Repeats until num reaches 10
console.log("The sum of numbers from 1 to 10 is: " + sum);  // Output: 55



// Example 2: Repeatedly asking for a correct password

let password;
let correctPassword = "javascript";
do {
    password = prompt("Enter your password:");
    if (password === correctPassword) {
        console.log("Access granted!");
    } else {
        console.log("Incorrect password. Try again.");
    }
} while (password !== correctPassword);  // Loops until the correct password is entered



// Example 3: Multiplication table using do...while loop

let numberr = 5;
let multiplier = 1;
do {
    console.log(`${number} * ${multiplier} = ${number * multiplier}`);
    multiplier++;
} while (multiplier <= 10);  // Prints multiplication table for 5



// Example 4: Collecting user inputs until a certain condition is met

let userInput;
let collectedData = [];
do {
    userInput = prompt("Enter a value (type 'exit' to stop):");
    if (userInput !== 'exit') {
        collectedData.push(userInput);  // Adds input to the array if it's not 'exit'
    }
} while (userInput !== 'exit');  // Stops when 'exit' is entered
console.log("Collected Data: ", collectedData);



// Example 5: Printing Fibonacci sequence using do...while loop

let a = 0, b = 1, nextTerm;
let n = 10;  // Number of terms to print
let counter = 0;
do {
    console.log(a);  // Prints the current Fibonacci number
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    counter++;
} while (counter < n);  // Loops until 10 Fibonacci numbers are printed
