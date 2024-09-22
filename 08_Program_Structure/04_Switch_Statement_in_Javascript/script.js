
// If statement: Executes the block of code if the condition is true

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");  // Executes because age is greater than or equal to 18
}


// If-Else statement: Executes the first block if the condition is true, otherwise executes the second block

let isSunny = true;
if (isSunny) {
  console.log("Let's go to the beach!");  // Executes because isSunny is true
} else {
  console.log("Stay inside and watch a movie.");  // Will not execute
}


// If-Else If-Else statement: Checks multiple conditions in sequence

let score = 65;
if (score >= 90) {
  console.log("Grade: A");  // Will not execute
} else if (score >= 80) {
  console.log("Grade: B");  // Will not execute
} else if (score >= 70) {
  console.log("Grade: C");  // Will not execute
} else if (score >= 60) {
  console.log("Grade: D");  // Executes because score is greater than or equal to 60
} else {
  console.log("Grade: F");  // Will not execute
}


// Example with multiple conditions and else block

let temperature = 30;
if (temperature > 35) {
  console.log("It's extremely hot outside!");  // Will not execute
} else if (temperature > 25) {
  console.log("It's a warm day!");  // Executes because temperature is greater than 25
} else {
  console.log("It's a cool day.");  // Will not execute
}
