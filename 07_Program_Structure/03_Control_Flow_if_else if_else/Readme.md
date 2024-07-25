# README

## JavaScript Conditional Statements: if, else if, and else

### Introduction

Conditional statements in JavaScript allow you to execute different blocks of code based on certain conditions. The primary conditional statements are `if`, `else if`, and `else`.

### Control Flow in JavaScript

When your program contains more than one statement, the statements are executed sequentially, as though they were a story, from top to bottom. This is known as **control flow**.

#### Example

Consider the following program, which contains two statements:

```javascript
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
```

1. **First Statement:**
   ```javascript
   let theNumber = Number(prompt("Pick a number"));
   ```
   - This statement prompts the user to enter a number.
   - The `prompt` function returns the input as a string.
   - The `Number` function converts the string to a number and assigns it to the variable `theNumber`.

2. **Second Statement:**
   ```javascript
   console.log("Your number is the square root of " + theNumber * theNumber);
   ```
   - This statement calculates the square of the number stored in `theNumber`.
   - It then logs the result to the console.

#### Conversion Functions

- The `Number` function converts a value to a number.
- Similarly, there are functions called `String` and `Boolean` that convert values to those types.

#### Schematic Representation

Here is a schematic representation of straight-line control flow:

In this representation, the arrow indicates the flow of control from one statement to the next, in a straight line from top to bottom.

### Conditional Execution in JavaScript

Not all programs are straight roads. We may, for example, want to create a branching road where the program takes the proper branch based on the situation at hand. This is called **conditional execution**.

### 1. if Statement

The `if` statement is used to execute a block of code if a specified condition is true.

#### Syntax

```javascript
if (condition) {
  // Code to be executed if the condition is true
}
```

#### Example

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

**Explanation:**

- The variable `age` is set to `18`.
- The `if` statement checks if `age` is greater than or equal to `18`.
- Since the condition is true, the message "You are an adult." is printed to the console.

### 2. else if Statement

The `else if` statement specifies a new condition to test if the first condition is false.

#### Syntax

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
}
```

#### Example

```javascript
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
}
```

**Explanation:**

- The variable `age` is set to `15`.
- The `if` statement checks if `age` is greater than or equal to `18`. Since this condition is false, it moves to the `else if` statement.
- The `else if` statement checks if `age` is greater than or equal to `13`. Since this condition is true, the message "You are a teenager." is printed to the console.

### 3. else Statement

The `else` statement executes a block of code if none of the previous conditions are true.

#### Syntax

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else {
  // Code to be executed if none of the above conditions are true
}
```

#### Example

```javascript
let age = 10;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
```

**Explanation:**

- The variable `age` is set to `10`.
- The `if` statement checks if `age` is greater than or equal to `18`. Since this condition is false, it moves to the `else if` statement.
- The `else if` statement checks if `age` is greater than or equal to `13`. Since this condition is also false, it moves to the `else` statement.
- The `else` statement is executed, and the message "You are a child." is printed to the console.

### Example: Conditional Execution

Conditional execution is created with the `if` keyword in JavaScript. In the simple case, we want some code to be executed if, and only if, a certain condition holds. We might, for example, want to show the square of the input only if the input is actually a number:

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
```

**Explanation:**

- **Condition Check:**
  ```javascript
  if (!Number.isNaN(theNumber)) {
  ```
  - The `if` keyword executes or skips a statement depending on the value of a Boolean expression.
  - The `Number.isNaN` function returns `true` only if the argument it is given is `NaN`.

- **Statement Execution:**
  ```javascript
  console.log("Your number is the square root of " + theNumber * theNumber);
  ```
  - If the condition is true (i.e., the input is a valid number), this statement calculates and logs the square of the number.

If you enter a non-number (e.g., "parrot"), no output is shown.

### Using Braces

The statement after the `if` is wrapped in braces (`{}`) in this example. The braces group any number of statements into a single statement, called a block. You could omit them if they hold only a single statement, but most JavaScript programmers use them consistently to avoid errors.

Example with braces omitted for a single statement:
```javascript
if (1 + 1 == 2) console.log("It's true");
// → It's true
```

### Else Keyword

You often won’t just have code that executes when a condition holds true but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. You can use the `else` keyword, together with `if`, to create two separate, alternative execution paths:

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

### Chaining Conditional Execution in JavaScript

If you have more than two paths to choose from, you can chain multiple `if/else` pairs together.

#### Example

Here's an example:

```javascript
let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

**Explanation:**

1. **First Condition:**
   ```javascript
   if (num < 10) {
     console.log("Small");
   }
   ```
   - The program checks whether `num` is less than 10.
   - If it is, it prints "Small" and ends.

2. **Second Condition:**
   ```javascript
   } else if (num < 100) {
     console.log("Medium");
   }
   ```
   - If the first condition is not met, the program checks if `num` is less than 100.
   - If it is, it prints "Medium" and ends.

3. **Else Condition:**
   ```javascript
   } else {
     console.log("Large");
   }
   ```
   - If neither condition is met, the program prints "Large".

### Summary

- Use `if` to specify a block of code to be executed if a condition is true.
- Use `else if` to specify a new condition to test if the first condition is false.
- Use `else` to specify a block of code to be executed if all previous conditions are false.

This concludes the README on using `if`, `else if`, and `else` statements in JavaScript. These conditional statements are essential for controlling the flow of your code based on different conditions. Understanding control flow and conditional execution will help you write more complex and logical programs.

### Additional Examples

#### Simple Example

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
```

**Explanation:**

- The variable `score` is set to `85`.
- The `if` statement checks if `score` is greater

 than or equal to `90`. Since this condition is false, it moves to the first `else if` statement.
- The first `else if` statement checks if `score` is greater than or equal to `80`. Since this condition is true, the message "Grade: B" is printed to the console.
- The subsequent `else if` and `else` statements are not executed because a true condition has already been found.

#### Complex Example

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
  if (theNumber < 10) {
    console.log("This is a small number.");
  } else if (theNumber < 100) {
    console.log("This is a medium number.");
  } else {
    console.log("This is a large number.");
  }
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

**Explanation:**

- The variable `theNumber` is set to the value entered by the user.
- The `if` statement checks if `theNumber` is a valid number.
- If the condition is true, it calculates and logs the square of `theNumber` and then further checks the size of the number:
  - If `theNumber` is less than 10, it prints "This is a small number."
  - If `theNumber` is less than 100 but not less than 10, it prints "This is a medium number."
  - If `theNumber` is 100 or greater, it prints "This is a large number."
- If `theNumber` is not a valid number, it prints "Hey. Why didn't you give me a number?"

These examples should help you understand the usage of `if`, `else if`, and `else` statements in JavaScript for both simple and complex scenarios.