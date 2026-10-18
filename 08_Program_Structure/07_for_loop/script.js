// ==========================================
// 1. Basic for Loop (1 to 5)
// ==========================================

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

//------------------------------------------

// ==========================================
// 2. Printing Odd Numbers (Forward & Backward)
// ==========================================

// Forward loop: Odd numbers from 1 to 15
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

// Backward loop: Odd numbers from 15 down to 1
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}

//------------------------------------------

// ==========================================
// 3. Printing Even Numbers (Forward & Backward)
// ==========================================

// Forward loop: Even numbers from 2 to 10
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// Backward loop: Even numbers from 10 down to 2
for (let i = 10; i >= 2; i = i - 2) {
    console.log(i);
}

//------------------------------------------

// ==========================================
// 4. Multiplication Tables
// ==========================================

// Fixed table: Multiples of 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

// Dynamic table: Based on user input
let n = prompt("enter your number");
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}

//------------------------------------------

// ==========================================
// 5. Loops with Arrays (Forward & Backward)
// ==========================================

// Forward array iteration
let fruits = ["apple", "mango", "litchi", "papaya", "banana"];
fruits.push("amrood");

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Backward array iteration
let fruitss = ["apple", "mango", "litchi", "papaya", "banana"];

for (let i = fruitss.length - 1; i >= 0; i--) {
    console.log(i, fruitss[i]);
}

//------------------------------------------

// ==========================================
// 6. Nested for Loops
// ==========================================

// Coordinate iterations (i and j)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Loops with Nested Arrays (2D Arrays)
let heroes = [
    ["Ironman", "superman", "spiderman", "thor"],
    ["superman", "superwoman", "flash"]
];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i]);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j} ${heroes[i][j]}`);
    }
}