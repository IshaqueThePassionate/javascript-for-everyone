# JavaScript `for` Loop

A comprehensive reference guide covering the JavaScript `for` loop, execution mechanics (dry run), odd/even iteration patterns, multiplication tables, nested loops, iterating over arrays (forward and backward), loops with nested arrays, `for...of` loops, and practical projects.

---

## Table of Contents
- [Introduction](#introduction)
- [Syntax & Structure](#syntax--structure)
- [How It Works & Dry Run](#how-it-works--dry-run)
- [Flowchart of for Loop](#flowchart-of-for-loop)
- [Basic Counter Loops](#basic-counter-loops)
- [Printing Odd and Even Numbers](#printing-odd-and-even-numbers)
  - [Odd Numbers (Forward & Backward)](#odd-numbers-forward--backward)
  - [Even Numbers (Forward & Backward)](#even-numbers-forward--backward)
- [Multiplication Table Patterns](#multiplication-table-patterns)
  - [Fixed Multiples (Multiples of 5)](#fixed-multiples-multiples-of-5)
  - [Dynamic Multiplication Table via User Input](#dynamic-multiplication-table-via-user-input)
- [Loops with Arrays](#loops-with-arrays)
  - [Forward Loop with Arrays](#forward-loop-with-arrays)
  - [Backward Loop with Arrays](#backward-loop-with-arrays)
- [Nested `for` Loops](#nested-for-loops)
  - [Coordinate Iterations](#coordinate-iterations)
  - [Loops with Nested Arrays (2D Arrays)](#loops-with-nested-arrays-2d-arrays)
- [The `for...of` Loop](#the-forof-loop)
  - [Standard `for...of` Loop](#standard-forof-loop)
  - [Nested `for...of` Loop](#nested-forof-loop)
- [Practical Project: Interactive Todo App](#practical-project-interactive-todo-app)
- [Common Mistakes](#common-mistakes)
- [Conclusion](#conclusion)

---

## Introduction

The `for` loop is one of the most commonly used control flow loops in JavaScript. It provides a compact and structured syntax to repeat a block of code for a specific number of iterations. It is particularly useful when the exact number of iterations is known before entering the loop.

---

## Syntax & Structure

The `for` loop consists of three distinct parts separated by semicolons:

```javascript
for (initialization; condition; increment/decrement) {
    // Code block to be executed
}
```

- **`initialization`**: Initializes the counter variable. This runs only once before the loop begins.
- **`condition`**: A boolean expression evaluated prior to every iteration. If `true`, the body executes; if `false`, the loop immediately terminates.
- **`increment/decrement`**: An expression executed after the body finishes, updating the counter variable for the next evaluation.

---

## How It Works & Dry Run

1. **Initialization:** The counter variable is initialized once.
2. **Condition Evaluation:** The condition is checked. If `false`, loop stops.
3. **Execution:** The statement body executes.
4. **Update:** The counter updates via increment/decrement.
5. **Repeat:** The cycle repeats from Step 2 until the condition yields `false`.

### Dry Run Table (`for (let i = 1; i <= 3; i++)`)

| Iteration | Variable State (`i`) | Condition (`i <= 3`) | Action / Console Output | Update (`i++`) |
| :---: | :---: | :---: | :---: | :---: |
| 1st | `i = 1` | `1 <= 3` (True) | Output: `1` | `i` becomes `2` |
| 2nd | `i = 2` | `2 <= 3` (True) | Output: `2` | `i` becomes `3` |
| 3rd | `i = 3` | `3 <= 3` (True) | Output: `3` | `i` becomes `4` |
| 4th | `i = 4` | `4 <= 3` (False) | Loop Terminates | None |

---

## Flowchart of for Loop

<img src="./images/for loop.PNG" alt="For Loop Flowchart">

---

## Basic Counter Loops

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
```

**Output:**
```text
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

---

## Printing Odd and Even Numbers

### Odd Numbers (Forward & Backward)

#### Forward Loop (1 to 15)
```javascript
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}
```

#### Backward Loop (15 down to 1)
```javascript
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}
```

---

### Even Numbers (Forward & Backward)

#### Forward Loop (2 to 10)
```javascript
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}
```

#### Backward Loop (10 down to 2)
```javascript
for (let i = 10; i >= 2; i = i - 2) {
    console.log(i);
}
```

---

## Multiplication Table Patterns

### Fixed Multiples (Multiples of 5)
```javascript
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}
```

### Dynamic Multiplication Table via User Input
```javascript
let n = prompt("enter your number");
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}
```

---

## Loops with Arrays

### Forward Loop with Arrays
```javascript
let fruits = ["apple", "mango", "litchi", "papaya", "banana"];
fruits.push("amrood");

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
```

### Backward Loop with Arrays
```javascript
let fruitsBack = ["apple", "mango", "litchi", "papaya", "banana"];

for (let i = fruitsBack.length - 1; i >= 0; i--) {
    console.log(i, fruitsBack[i]);
}
```

---

## Nested `for` Loops

### Coordinate Iterations
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

### Loops with Nested Arrays (2D Arrays)
```javascript
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
```

---

## The `for...of` Loop

The `for...of` statement allows clean, direct iteration over iterable objects (like arrays or strings) without requiring manual index tracking.

### Standard `for...of` Loop
```javascript
let fruits = ["apple", "mango", "banana", "papaya", "cheryy", "cheeku", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

### Nested `for...of` Loop
```javascript
let heroTeams = [
    ["Ironman", "Thor", "Hulk"],
    ["Superman", "Batman", "Flash"]
];

for (let team of heroTeams) {
    for (let hero of team) {
        console.log(hero);
    }
}
```

---

## Practical Project: Interactive Todo App

A complete console application demonstrating list tracking using a combination of loops, conditional branches, array methods, and index traversals:

```javascript
let todo = [];
let req = prompt("enter your request");

while (true) {
    if (req === "quit") {
        console.log("you are quitting the app");
        break;
    }

    if (req === "list") {
        console.log("=====list of the items====");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
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
        console.log("Invalid request");
    }

    req = prompt("please enter your request");
}
```

---

## Common Mistakes

### 1. Missing or Broken Increment/Decrement (Infinite Loops)
```javascript
for (let i = 1; i <= 5; ) {
    console.log(i); // i remains 1 forever
}
```

### 2. Off-by-One Index Errors
Arrays use zero-based indexing. Using `<=` instead of `<` attempts to read past the boundary of the array and yields `undefined`:

```javascript
// Incorrect: access out-of-bounds element at index equal to length
for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]); 
}

// Correct:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

## Conclusion

The `for` loop provides precise, indexed iteration mechanics in JavaScript. For linear counting, reverse traversal, nested multidimensional lists, or modern item extraction using `for...of`, mastering loop initialization, boundary conditions, and step updates forms the bedrock of data handling and algorithmic problem solving.