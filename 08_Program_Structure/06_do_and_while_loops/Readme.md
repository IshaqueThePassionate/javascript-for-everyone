# JavaScript `while` and `do...while` Loops

## Introduction

Loops are fundamental structures in JavaScript that allow you to execute a block of code repeatedly based on a specified condition. Two common types of loops in JavaScript are the `while` loop and the `do...while` loop. This README will explain how both of these loops work, with examples to illustrate their usage.

## `while` Loop

### Syntax

The basic syntax of a `while` loop is:

```javascript
while (condition) {
    // Code to be executed
}
```

- **`condition`**: This is a boolean expression that is evaluated before each iteration of the loop. If the condition is `true`, the loop's code block is executed. If the condition is `false`, the loop terminates, and execution continues with the code following the loop.
- **`Code to be executed`**: The block of code that will run repeatedly as long as the condition is `true`.

### Example 1: Basic `while` Loop

Let’s look at a simple example to understand how the `while` loop works:

```javascript
let count = 1;

while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}
```

**Explanation:**

- The loop will run as long as the value of `count` is less than or equal to `5`.
- Each time the loop runs, the current value of `count` is printed, and then `count` is incremented by `1`.
- Once `count` exceeds `5`, the condition becomes `false`, and the loop terminates.

**Output:**

```
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
```

### Example 2: `while` Loop with User Input

A common use case for a `while` loop is to keep asking the user for input until they provide a valid response.

```javascript
let userInput;

while (userInput !== "yes") {
    userInput = prompt("Do you want to continue? Type 'yes' to proceed.");
}

console.log("Thank you for confirming!");
```

**Explanation:**

- The loop will continue prompting the user to type "yes" until they do so.
- Once the user types "yes", the condition `userInput !== "yes"` becomes `false`, and the loop terminates, allowing the program to proceed.

### Potential Pitfall: Infinite Loop

A `while` loop can become an infinite loop if the condition never becomes `false`. This can happen if the loop's logic does not properly update the variables involved in the condition.

**Example of an Infinite Loop:**

```javascript
let i = 0;

while (i < 5) {
    console.log("This will run forever!");
    // i is never incremented, so the condition remains true forever
}
```

**How to Avoid Infinite Loops:**

- Always ensure that the condition in a `while` loop will eventually become `false`.
- Update any variables involved in the condition within the loop's body.

## `do...while` Loop

### Introduction

The `do...while` loop is similar to the `while` loop, but with one key difference: the `do...while` loop guarantees that the code block will be executed at least once, even if the condition is `false` from the beginning. This is because the condition is evaluated after the code block has been executed.

### Syntax

The basic syntax of a `do...while` loop is:

```javascript
do {
    // Code to be executed
} while (condition);
```

- **`Code to be executed`**: This is the block of code that will be executed at least once, and then repeatedly as long as the condition remains `true`.
- **`condition`**: This is a boolean expression that is evaluated after each iteration. If the condition is `true`, the loop will continue to execute; if `false`, the loop will terminate.

### Example: Basic `do...while` Loop

```javascript
let count = 1;

do {
    console.log("Count is: " + count);
    count++;
} while (count <= 5);
```

**Explanation:**

- In this example, the loop will print the current value of `count`, then increment `count`, and check the condition.
- Even if `count` started with a value greater than `5`, the loop would still execute once before checking the condition.

**Output:**

```
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
```

### When to Use `do...while` Loop

- Use a `do...while` loop when you need the code block to execute at least once, regardless of whether the condition is true or false.
- This loop is particularly useful in scenarios where you want to execute some code and then check a condition after running it, such as getting user input.

## Example: `do...while` Loop with User Input

```javascript
let userInput;

do {
    userInput = prompt("Please enter a valid password:");
} while (userInput !== "password123");

console.log("Access granted!");
```

**Explanation:**

- The loop will ask the user to enter a valid password until they input "password123".
- Since the condition is checked after each input, the loop ensures that the prompt is shown at least once.

## Conclusion

Both `while` and `do...while` loops are essential tools in JavaScript for controlling the flow of your code based on conditions. The `while` loop checks the condition before executing the loop's body, making it useful when the condition might be `false` from the start. The `do...while` loop checks the condition after executing the loop's body, ensuring the code runs at least once. Understanding when and how to use these loops effectively will help you write more efficient and readable JavaScript code.

