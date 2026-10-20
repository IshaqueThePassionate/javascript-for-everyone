# JavaScript Functions: Declarations, Scope, and Advanced Concepts

A comprehensive and beginner-friendly reference guide covering core JavaScript function fundamentals: Function Declarations, Arguments & Parameters, Return statements, Scope types (Global, Function, Block, Lexical), Function Expressions, Higher-Order Functions, Methods, and Anonymous Functions.

---

## Table of Contents
- [What Are Functions?](#what-are-functions)
- [1. Function Declarations](#1-function-declarations)
  - [Syntax & Hoisting](#syntax--hoisting)
  - [Easy Examples (Declarations)](#easy-examples-declarations)
  - [Course Slide Examples (Declarations)](#course-slide-examples-declarations)
  - [Practice Question 1: Roll a Dice](#practice-question-1-roll-a-dice)
- [2. Functions with Arguments & Parameters](#2-functions-with-arguments--parameters)
  - [Parameters vs. Arguments](#parameters-vs-arguments)
  - [Easy Examples (Arguments)](#easy-examples-arguments)
  - [Course Slide Example: Print User Info](#course-slide-example-print-user-info)
- [3. The `return` Keyword](#3-the-return-keyword)
  - [How Return Works](#how-return-works)
  - [Execution Stops at Return](#execution-stops-at-return)
  - [Storing the Return Value in a Variable](#storing-the-return-value-in-a-variable)
  - [Returning Undefined](#returning-undefined)
  - [Easy Examples (Return Statement)](#easy-examples-return-statement)
- [Practice Questions (Return Statement)](#practice-questions-return-statement)
  - [Practice Question 2: Sum from 1 to N (`getSum`)](#practice-question-2-sum-from-1-to-n-getsum)
  - [Practice Question 3: Concatenate Array of Strings (`concat`)](#practice-question-3-concatenate-array-of-strings-concat)
- [4. Function Expressions](#5-function-expressions)
- [5. Higher-Order Functions](#6-higher-order-functions)
  - [Higher-Order Functions: Taking Functions as Arguments](#higher-order-functions-taking-functions-as-arguments)
  - [Higher-Order Functions: Returning a Function](#higher-order-functions-returning-a-function)
- [6. Methods (Functions inside Objects)](#7-methods-functions-inside-objects)
- [7. Anonymous Functions](#8-anonymous-functions)
  - [Assigning to Variables](#assigning-to-variables)
  - [Using as Simple Callbacks](#using-as-simple-callbacks)
- [Why Functions Are Special in JavaScript](#why-functions-are-special-in-javascript)
- [Conclusion](#conclusion)

---

## What Are Functions?

A function is a reusable block of code designed to perform a specific task[cite: 12]. Instead of rewriting the same lines multiple times, functions allow you to write logic once and execute it whenever needed across your application.

---

## 1. Function Declarations

A function declaration defines a named function using the `function` keyword followed by a unique name, parentheses `()`, and curly brackets `{}`[cite: 6].

### Syntax & Hoisting

```javascript
function funcName() {
    // code to execute
}

// Function Call / Invocation
funcName();
```

> **Hoisting Concept:** Function declarations are hoisted to the top of their scope. This means you can call them even before the line where they are written:

```javascript
sayHi(); // Output: Hi!

function sayHi() {
    console.log("Hi!");
}
```

---

### Easy Examples (Declarations)

#### Example A: Simple Welcome Message
```javascript
function showWelcomeMessage() {
    console.log("Welcome to JavaScript learning!");
    console.log("Keep practicing every day.");
}

showWelcomeMessage();
```

#### Example B: Print Even Numbers from 2 to 10
```javascript
function printEvenNumbers() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

printEvenNumbers();
```

#### Example C: Check Light Switch Status
```javascript
function checkLight() {
    let isLightOn = true;
    if (isLightOn) {
        console.log("The room is bright.");
    } else {
        console.log("The room is dark.");
    }
}

checkLight();
```

---

### Course Slide Examples (Declarations)

#### Example 1: Basic Hello Function
```javascript
function hello() {
    console.log("hello");
}

hello(); // Output: hello
```
[cite: 6]

#### Example 2: Printing Multiple Lines
```javascript
function printName() {
    console.log("apna college");
    console.log("shradha khapra");
}

printName();
```
[cite: 6]

#### Example 3: Function with a Loop (Print 1 to 5)
```javascript
function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

print1to5();
```
[cite: 6]

#### Example 4: Function with Conditional Statement
```javascript
function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

isAdult(); // Output: adult
```
[cite: 7]

---

### Practice Question 1: Roll a Dice

**Task:** Create a function to roll a 6-sided dice and always display the rolled value (from 1 to 6)[cite: 8].

```javascript
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

// Testing the dice roll
rollDice();
rollDice();
rollDice();
rollDice();
```
[cite: 9]

---

## 2. Functions with Arguments & Parameters

Arguments allow you to pass dynamic data into your functions, customizing how they run each time[cite: 10].

```javascript
function funcName(arg1, arg2) {
    // perform actions using arg1 and arg2
}
```
[cite: 10]

### Parameters vs. Arguments
- **Parameters:** The placeholder names declared in the function definition header (e.g., `name`, `age`)[cite: 11].
- **Arguments:** The real, actual values passed into the function call (e.g., `"shradha"`, `23`)[cite: 11].

---

### Easy Examples (Arguments)

#### Example A: Multiply Two Numbers
```javascript
function multiply(num1, num2) {
    console.log(`Product: ${num1 * num2}`);
}

multiply(4, 5); // Output: Product: 20
```

#### Example B: Check Even or Odd Number
```javascript
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}

checkEvenOdd(7);  // Output: 7 is Odd
checkEvenOdd(12); // Output: 12 is Even
```

#### Example C: Custom Personalized Greeting
```javascript
function greetUser(username, role) {
    console.log(`Hello ${username}, you are logged in as ${role}.`);
}

greetUser("Ali", "Admin");   // Output: Hello Ali, you are logged in as Admin.
greetUser("Sara", "Student"); // Output: Hello Sara, you are logged in as Student.
```

---

### Course Slide Example: Print User Info

```javascript
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("shradha", 23); // Output: shradha's age is 23.
printInfo("rajat", 19);   // Output: rajat's age is 19.
```
[cite: 11]

---

## 3. The `return` Keyword

The `return` statement sends a computed value back out of the function to the point where it was invoked[cite: 12].

$$\text{Input (Arguments)} \longrightarrow \mathbf{Function} \longrightarrow \text{Output (Return Value)}$$
[cite: 12]

```javascript
function funcName(arg1, arg2) {
    // do calculations
    return val;
}
```
[cite: 12]

---

### How Return Works

```javascript
function sum(a, b) {
    return a + b;
}

let total = sum(3, 4);
console.log(total); // Output: 7
```

---

### Execution Stops at Return

The moment JavaScript hits a `return` statement, the function immediately terminates[cite: 13]. Any lines written below it inside that function are unreachable[cite: 13]:

```javascript
function sum(a, b) {
    console.log("hello");
    console.log("hello");
    return a + b; // Execution stops here!
    console.log("hello2"); // Will never run
    console.log("hello2"); // Will never run
}

console.log(sum(1, 2));
```
[cite: 13]

**Output:**
```text
hello
hello
3
```

---

### Storing the Return Value in a Variable

A function call evaluates to its returned value. You can assign it to a variable:

```javascript
function introduceMe() {
    console.log("my name is ishaque");
    console.log("and i am a web developer");
    return "ishaque";
}

let value = introduceMe();
console.log(value); // Output: "ishaque"
```

---

### Returning Undefined

If a function has no `return` statement, or uses `return;` without any value, it automatically returns `undefined`:

```javascript
function doNothing() {
    return;
}

console.log(doNothing()); // Output: undefined
```

---

### Easy Examples (Return Statement)

#### Example A: Calculate Average of Three Numbers
```javascript
function calculateAverage(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}

let resultAvg = calculateAverage(10, 20, 30);
console.log("Average is:", resultAvg); // Output: Average is: 20
```

#### Example B: Find Maximum of Two Numbers
```javascript
function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let maxNum = findMax(45, 80);
console.log("Greater number is:", maxNum); // Output: Greater number is: 80
```

#### Example C: Convert Minutes to Seconds
```javascript
function minutesToSeconds(minutes) {
    return minutes * 60;
}

let totalSeconds = minutesToSeconds(5);
console.log("Total seconds:", totalSeconds); // Output: Total seconds: 300
```

---

## Practice Questions (Return Statement)

### Practice Question 2: Sum from 1 to N (`getSum`)

**Task:** Create a function that takes an integer `n` as an argument and returns the sum of all numbers from `1` to `n`.

```javascript
function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(5));  // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(getSum(10)); // Output: 55
```


---

### Practice Question 3: Concatenate Array of Strings (`concat`)

**Task:** Create a function that takes an array of strings and returns a single concatenated string containing all elements combined.

```javascript
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }

    return result;
}

console.log(concat(str)); // Output: "hihellobye!"
```


---



## 4. Function Expressions

A function expression defines a function and stores it inside a variable. Function expressions are **not hoisted**—you cannot call them before the line on which they are declared.

#### Example 1 (Easy): Basic Math Addition
```javascript
const addNumbers = function(a, b) {
    return a + b;
};

console.log(addNumbers(10, 20)); // Output: 30
```

#### Example 2 (Medium): String Formatter Expression
```javascript
const formatUser = function(name, role) {
    return `Username: ${name.toUpperCase()} | Status: [${role}]`;
};

console.log(formatUser("ishaque", "Student")); 
// Output: Username: ISHAQUE | Status: [Student]
```

#### Example 3 (Advance): Array Filter using Function Expression
```javascript
const filterEvens = function(arr) {
    let evens = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
};

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEvens(numbersList)); // Output: [2, 4, 6, 8]
```

---

## 5. Higher-Order Functions

A **Higher-Order Function** is a function that either takes another function as an argument, or returns a function.

### Higher-Order Functions: Taking Functions as Arguments

#### Example 1 (Easy): Repeat Action Multiple Times
```javascript
function greet() {
    console.log("Welcome!");
}

function repeatAction(actionFunc, count) {
    for (let i = 0; i < count; i++) {
        actionFunc(); // Running passed function
    }
}

repeatAction(greet, 3);
```

#### Example 2 (Medium): Passing Math Operations Dynamically
```javascript
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function calculate(operatorFunc, a, b) {
    return operatorFunc(a, b);
}

console.log(calculate(add, 10, 5));      // Output: 15
console.log(calculate(multiply, 10, 5)); // Output: 50
```

#### Example 3 (Advance): Custom Array Transformer (Like `map`)
```javascript
function transformArray(array, operation) {
    let result = [];
    for (let item of array) {
        result.push(operation(item));
    }
    return result;
}

function squareNum(n) {
    return n * n;
}

let nums = [2, 3, 4];
console.log(transformArray(nums, squareNum)); // Output: [4, 9, 16]
```

---

### Higher-Order Functions: Returning a Function

#### Example 1 (Easy): Simple Greeter Generator
```javascript
function createGreeting(greetingWord) {
    return function(name) {
        console.log(`${greetingWord}, ${name}!`);
    };
}

let sayHi = createGreeting("Hi");
sayHi("Ishaque"); // Output: Hi, Ishaque!
```

#### Example 2 (Medium): Course Slide Factory (`oddOrEvenFactory`)
```javascript
function oddOrEvenFactory(request) {
    if (request === "odd") {
        return function(n) {
            console.log(!(n % 2 === 0));
        };
    } else if (request === "even") {
        return function(n) {
            console.log(n % 2 === 0);
        };
    } else {
        console.log("wrong request");
    }
}

let checkEven = oddOrEvenFactory("even");
checkEven(10); // Output: true
checkEven(7);  // Output: false
```

#### Example 3 (Advance): Multiplier Factory
```javascript
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(15)); // Output: 30
console.log(triple(15)); // Output: 45
```

---

## 6. Methods (Functions inside Objects)

When a function is stored as a property of an object, it is called a **Method**.

#### Example 1 (Easy): Basic Greeting Method
```javascript
const person = {
    name: "Ishaque",
    sayHello: function() {
        console.log("Hello from inside the object!");
    }
};

person.sayHello(); // Output: Hello from inside the object!
```

#### Example 2 (Medium): Math Calculator with Methods
```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.mul(6, 4));  // Output: 24
```

#### Example 3 (Advance): Modern Shorthand Syntax & State Action
```javascript
const bankAccount = {
    holder: "Muhammad Ishaque",
    balance: 5000,

    // Shorthand method syntax
    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount}. New Balance: ${this.balance}`;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds!";
        }
        this.balance -= amount;
        return `Withdrew ${amount}. Remaining: ${this.balance}`;
    }
};

console.log(bankAccount.deposit(1500));  // Output: Deposited 1500. New Balance: 6500
console.log(bankAccount.withdraw(2000)); // Output: Withdrew 2000. Remaining: 4500
```

---

## 7. Anonymous Functions

An **Anonymous Function** is simply a function without a name identifier.

### Assigning to Variables
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Aisha")); // Output: Hello, Aisha!
```

### Using as Simple Callbacks
Anonymous functions are frequently used as one-time arguments passed into timers or array helpers:

```javascript
// Using an anonymous function in setTimeout
setTimeout(function() {
    console.log("This message appears after 2 seconds.");
}, 2000);
```

---

## Why Functions Are Special in JavaScript

In JavaScript, functions are **callable objects**. They can have properties, be assigned to variables, passed into arguments, and returned from other functions:

```javascript
function test() {
    console.log("Hello!");
}

console.log(typeof test); // Output: "function"
```
Even though they are internally objects, JavaScript gives them a special `typeof "function"` identifier because they can be invoked with `()`.

---

## Conclusion

1. **Declarations vs. Expressions:** Declarations are hoisted; function expressions are stored inside variables[cite: 6].
2. **Scope Hierarchy:** Variables resolve from Local/Block $\rightarrow$ Lexical (Parent) $\rightarrow$ Global.
3. **Higher-Order Functions:** JavaScript functions can be passed as arguments or returned from other functions.
4. **Methods:** Functions stored inside objects to define behaviors.
5. **First-Class Citizens:** Functions in JS can be treated like any regular value (assigned, copied, returned).