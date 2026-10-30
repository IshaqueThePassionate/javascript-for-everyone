# Higher-Order Functions and Callbacks in JavaScript (Simple Guide)

## Overview

In JavaScript, functions are **First-Class Citizens**. This simply means you can treat a function just like any regular variable:
* You can save a function in a variable.
* You can pass a function into another function as an argument.
* You can return a function from inside another function.

---

## 1. What is a Callback Function?

> **A Callback is a function passed as an argument into another function to be executed later.**

Think of it like giving someone your phone number and saying: *"Call me back when you are ready."*

```javascript
// This is the callback function
function sayHello() {
  console.log("Hello!");
}

// This function receives the callback
function executeTask(callback) {
  console.log("Task started...");
  callback(); // Running the callback here
}

executeTask(sayHello);
```

### Output:
```text
Task started...
Hello!
```

---

## 2. What is a Higher-Order Function (HOF)?

> **A Higher-Order Function is a function that either takes another function as an argument, or returns a function.**

There are two common types of Higher-Order Functions:

---

### Type A: Function That Accepts Another Function (Takes a Callback)

Instead of hardcoding what to do, the function accepts the logic from outside.

```javascript
// Helper functions (callbacks)
function makeUpperCase(text) {
  return text.toUpperCase();
}

function makeLowerCase(text) {
  return text.toLowerCase();
}

// Higher-Order Function (accepts logic as an argument)
function transformText(text, logic) {
  return logic(text);
}

console.log(transformText("JavaScript", makeUpperCase)); // Output: JAVASCRIPT
console.log(transformText("JavaScript", makeLowerCase)); // Output: javascript
```

### Explanation:
* `transformText` is the **Higher-Order Function**.
* `makeUpperCase` and `makeLowerCase` are the **Callbacks**.
* You reuse the same `transformText` function by simply changing the logic you pass into it.

---

### Type B: Function That Returns Another Function (Function Factory)

A function can also build and return a brand new function for you.

```javascript
// Higher-Order Function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// Creating customized functions
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

### Explanation:
* `createMultiplier(2)` returns a customized function that always multiplies its input by `2`.
* `createMultiplier(3)` returns a customized function that always multiplies its input by `3`.

---

## 3. Real-World Practical Example: Processing a List

Here is how higher-order functions help avoid repetitive loops:

```javascript
// Callbacks (the logic to apply)
function capitalize(word) {
  return word.toUpperCase();
}

function applyDiscount(price) {
  return price - price * 0.1; // 10% discount
}

// Higher-Order Function (reusable loop)
function processList(array, logic) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(logic(array[i]));
  }
  return result;
}

const fruits = ["apple", "banana", "cherry"];
const prices = [100, 200, 300];

console.log(processList(fruits, capitalize));    // Output: ['APPLE', 'BANANA', 'CHERRY']
console.log(processList(prices, applyDiscount)); // Output: [90, 180, 270]
```

---

## Summary

| Term | What It Is | Role |
| :--- | :--- | :--- |
| **Callback** | A function passed as an input | The specific action to perform |
| **Higher-Order Function** | The receiving or returning function | The manager that controls execution or creates new functions |

### Key Rule to Remember:
* When passing a callback, do **not** use parentheses `()`:
  * `executeTask(sayHello)` $\rightarrow$ **Correct** (passes the reference)
  * `executeTask(sayHello())` $\rightarrow$ **Incorrect** (calls the function immediately)