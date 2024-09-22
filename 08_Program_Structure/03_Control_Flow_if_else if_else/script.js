// If Statement

let temperature = 30;
if (temperature > 25) {
  console.log("It's a hot day!");   // Executes if the condition is true
}


// If-Else Statement

let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella!");  // Executes if true
} else {
  console.log("Enjoy the sunshine!");  // Executes if false
}


// If-Else If-Else Statement

let score = 85;
if (score >= 90) {
  console.log("Excellent!");   // Executes if score is 90 or above
} else if (score >= 75) {
  console.log("Good job!");   // Executes if score is between 75 and 89
} else {
  console.log("Keep trying!");  // Executes if score is below 75
}


// Switch Statement

let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek break.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's just another day.");
    break;
}


// Ternary Operator (Conditional Operator)

let isAdult = age >= 18 ? "Yes, you're an adult." : "No, you're not an adult.";
console.log(isAdult);   // Executes based on the condition


// Nested Conditions

let time = 19;
if (time >= 6 && time < 12) {
  console.log("Good morning!");
} else if (time >= 12 && time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");   // Executes for all other times
}


// Short-circuiting in Control Flow

let userRole = "admin";
userRole === "admin" && console.log("Access granted to admin panel.");  // Executes if true
userRole !== "admin" || console.log("You are not allowed to enter.");   // Executes if false
