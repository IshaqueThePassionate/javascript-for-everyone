
// Basic Ternary Operator

let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);  // Output: Yes, you can vote



// Using Ternary Operator for Odd or Even Check

let number = 10;
let isEven = (number % 2 === 0) ? "Even" : "Odd";
console.log(isEven);  // Output: Even



// Nested Ternary Operator

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" : "F";
console.log(grade);  // Output: B


// Ternary Operator with Function Call

let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);  // Output: Please log in.



// my example 

const username = 5 > 2 ? 'Ahmed' : 'The Procoder'

// const gender = 'F'

// debugger
// const userMessage = `${gender.toLocaleLowerCase() === 'f' ? 'She' : 'He'} is a college student.`

// console.log(userMessage);

const result = null ? 'Ishaque' : '' ? '12' : 0

console.log(result)


