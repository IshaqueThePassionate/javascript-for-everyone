
// Variable Declaration using var

var name = "Alice";
console.log(name);   // "Alice"


// Variable Declaration using let

let age = 25;
console.log(age);    // 25


// Variable Declaration using const (constant, cannot be reassigned)

const country = "USA";
console.log(country);   // "USA"


// Reassigning a variable declared with var

name = "Bob";
console.log(name);   // "Bob"


// Reassigning a variable declared with let

age = 30;
console.log(age);    // 30


// Attempting to reassign a constant variable will cause an error
// country = "Canada";  // TypeError: Assignment to constant variable.

// Block-scoped variable with let
{
  let city = "New York";
  console.log(city);   // "New York"
}
// console.log(city);   // ReferenceError: city is not defined



// var is function-scoped, so it can be accessed outside the block

{
  var globalVar = "I am global";
}
console.log(globalVar);   // "I am global"



// Variables declared with var can be hoisted

console.log(hoistedVar);  // undefined (hoisted, but not initialized)
var hoistedVar = "Hoisting with var";


// let and const are not hoisted in the same way
// console.log(hoistedLet);  // ReferenceError: Cannot access 'hoistedLet' before initialization

let hoistedLet = "Hoisting with let";


// Naming conflicts (let and var can co-exist)

let user = "Charlie";
var userr = "David";   // SyntaxError: Identifier 'user' has already been declared
