# `do...while` Loop

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

