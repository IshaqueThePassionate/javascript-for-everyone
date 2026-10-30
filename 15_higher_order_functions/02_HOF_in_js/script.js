
// Higher order functions..


// Example: 1

// Defines a function named 'geet' that takes 'name' as a parameter
function greet(name){
    // Returns a greeting string that includes the provided name using template literals
    return `Greetings! ${name}`;
}

// Defines a function 'displaygreeting' that takes two parameters:
// - 'greetuser': a function that generates a greeting
// - 'hisName': a string representing the name to be greeted
function displaygreeting(greetuser, hisName){
    // Calls the 'greetuser' function with 'hisName' as an argument and logs the returned greeting to the console
    console.log(greetuser(hisName));
}

// Calls the 'displaygreeting' function, passing the 'geet' function and the string "ahmed" as arguments
displaygreeting(greet, "ahmed");



// Example: 2

// Higher-order function that takes two numbers and a callback function
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}

// Callback function to add two numbers
function add(x, y) {
    return x + y;
}

// Callback function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Using the higher-order function with the 'add' callback
const sum = operateOnNumbers(5, 3, add);
console.log(`Sum: ${sum}`); // Output: Sum: 8

// Using the higher-order function with the 'multiply' callback
const product = operateOnNumbers(5, 3, multiply);
console.log(`Product: ${product}`); // Output: Product: 15

// Using an anonymous function as a callback to subtract two numbers
const difference = operateOnNumbers(5, 3, function(x, y) {
    return x - y;
});
console.log(`Difference: ${difference}`); // Output: Difference: 2

// Using an arrow function as a callback to divide two numbers
const quotient = operateOnNumbers(6, 3, (x, y) => x / y);
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2



// Example: 3

// Higher-order function
function repeatOperation(number, operation) {
    let result = number;
    for (let i = 0; i < 5; i++) {
        result = operation(result);
    }
    return result;
}

// Callback function to add 2
function addTwo(x) {
    return x + 2;
}

// Using the higher-order function
const finalResult = repeatOperation(0, addTwo);
console.log(finalResult); // Output: 10
