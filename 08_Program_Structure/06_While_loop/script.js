
// ==========================================
// 1. Basic while Loop (Counting 1 to 5)
// ==========================================

let count = 1;

while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}

//------------------------------------------

// ==========================================
// 2. Alternative Counter Example (1 to 5)
// ==========================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//------------------------------------------

// ==========================================
// 3. User Input Validation
// ==========================================

let userInput;

while (userInput !== "yes") {
    userInput = prompt("Do you want to continue? Type 'yes' to proceed.");
}

console.log("Thank you for confirming!");

//------------------------------------------

// ==========================================
// 4. Infinite Loop (Reference / Warning)
// ==========================================

// let infiniteIndex = 0;
// while (infiniteIndex < 5) {
//     console.log("This will run forever!");
//     // infiniteIndex is never incremented
// }

//------------------------------------------

// ==========================================
// 5. The break Keyword
// ==========================================

let step = 1;

while (step <= 5) {
    if (step === 4) {
        break; // Loop terminates when step reaches 4
    }
    console.log(step);
    step++;
}

//------------------------------------------

// ==========================================
// 6. Favorite Movie Game (Approach 1: Condition-Based Exit)
// ==========================================

let favrtMovie = "Avatar";
let guessMovie = prompt("Guess My favourite Movies");

while ((guessMovie != favrtMovie) && (guessMovie != "quit")) {
    console.log("Wrong guess!");
    guessMovie = prompt("Guess Again");
}

if (guessMovie == favrtMovie) {
    console.log("Congratulations! you have guessed correct");
} else if (guessMovie == "quit") {
    console.log("You Quited.! You tried your best. better luck next time.");
}

//------------------------------------------

// ==========================================
// 7. Favorite Movie Game (Approach 2: Using break Keyword)
// ==========================================

let favMovie = "Avatar"; 
let guess = prompt("Guess My favourite Movies");

while (guess != favMovie) {
    if (guess == "quit") {
        console.log("you quited");
        break;
    }
    guess = prompt("you guessed wrong try again.");
}

if (guess == favMovie) {
    console.log("congratulations! You Guessed Correct.");
}

//------------------------------------------

// ==========================================
// 8. Odd Numbers: Forward & Backward (using while loop)
// ==========================================

// Forward: 1 to 15
let oddForward = 1;
while (oddForward <= 15) {
    console.log(oddForward);
    oddForward += 2;
}

// Backward: 15 down to 1
let oddBackward = 15;
while (oddBackward >= 1) {
    console.log(oddBackward);
    oddBackward -= 2;
}

//------------------------------------------

// ==========================================
// 9. Even Numbers: Forward & Backward (using while loop)
// ==========================================

// Forward: 2 to 10
let evenForward = 2;
while (evenForward <= 10) {
    console.log(evenForward);
    evenForward += 2;
}

// Backward: 10 down to 2
let evenBackward = 10;
while (evenBackward >= 2) {
    console.log(evenBackward);
    evenBackward -= 2;
}

//------------------------------------------

// ==========================================
// 10. Multiplication Tables (using while loop)
// ==========================================

// Fixed: Multiples of 5
let tableFive = 5;
while (tableFive <= 50) {
    console.log(tableFive);
    tableFive += 5;
}

// Dynamic: User Input Table
let n = prompt("enter your number");
n = parseInt(n);

let tableIndex = n;
while (tableIndex <= n * 10) {
    console.log(tableIndex);
    tableIndex += n;
}

//------------------------------------------

// ==========================================
// 11. Loops with Arrays: Forward & Backward (using while loop)
// ==========================================

let fruits = ["apple", "mango", "litchi", "papaya", "banana"];
fruits.push("amrood");

// Forward loop with array
let fIndex = 0;
while (fIndex < fruits.length) {
    console.log(fIndex, fruits[fIndex]);
    fIndex++;
}

// Backward loop with array
let bIndex = fruits.length - 1;
while (bIndex >= 0) {
    console.log(bIndex, fruits[bIndex]);
    bIndex--;
}

//------------------------------------------

// ==========================================
// 12. Nested Loops & Nested Arrays (using while loop)
// ==========================================

// Coordinate Iterations (i and j)
let outer = 1;
while (outer <= 3) {
    let inner = 1;
    while (inner <= 3) {
        console.log(`i = ${outer}, j = ${inner}`);
        inner++;
    }
    outer++;
}

// Nested Arrays (Heroes)
let heroes = [
    ["Ironman", "superman", "spiderman", "thor"],
    ["superman", "superwoman", "flash"]
];

let heroRow = 0;
while (heroRow < heroes.length) {
    console.log(heroRow, heroes[heroRow]);

    let heroCol = 0;
    while (heroCol < heroes[heroRow].length) {
        console.log(`j=${heroCol} ${heroes[heroRow][heroCol]}`);
        heroCol++;
    }
    heroRow++;
}

//------------------------------------------

// ==========================================
// 13. Practical Project: Todo App (Console/Prompt Based)
// ==========================================

let todo = [];
let req = prompt("enter your request");

while (true) {
    if (req === "quit") {
        console.log("you are quitting the app");
        break;
    }
    
    if (req === "list") {
        console.log("=====list of the items====");
        let listIndex = 0;
        while (listIndex < todo.length) {
            console.log(listIndex, todo[listIndex]);
            listIndex++;
        }
        console.log("==========================");
    } else if (req === "add") {
        let task = prompt("please enter the task you wanna add");
        todo.push(task);
        console.log("task added");
    } else if (req === "delete") {
        let indx = prompt("enter the task index you wanna delete");
        todo.splice(indx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request, please try again");
    }

    req = prompt("please enter your request");
}


