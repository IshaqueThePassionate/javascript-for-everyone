# Functions in JavaScript

<br>

Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task. Functions allow you to encapsulate code, making it modular and easier to manage, test, and debug.

## What is a Function?

A function in JavaScript is a set of statements that performs a task or calculates a value. Functions can take input in the form of parameters and can return an output. They help in organizing code and avoiding repetition.


### Basic Syntax

Here's the basic syntax for creating a function in JavaScript:

```javascript
function functionName(parameters) {
  // code to be executed
}
```

- `function`: The keyword to declare a function.
- `functionName`: The name of the function.
- `parameters`: The values passed to the function, separated by commas.
- `{ // code to be executed }`: The block of code that defines what the function does.

<br>

## Defining a function

To create a function, you use the `function` keyword followed by the name of the function, a list of parameters (if any), and the function body enclosed in curly braces `{}`.

#### Example: Basic Function

```javascript
function sayHello() {
  console.log("Hello, World!");
}
```

In this example, `sayHello` is a function that prints "Hello, World!" to the console.
<br>

### Calling a Function

To execute a function, you need to call it by using its name followed by parentheses `()`.

```javascript
sayHello(); // Output: Hello, World!
```
<br>

## Storing return Value in a variable

In JavaScript, the **return value** of a function is passed back to the point where the function is called. When you assign a function call to a variable, like in your example, the variable stores the value returned by that function. This is how the variable `value` is receiving the return value `"ishaque"`.

### Step-by-step breakdown:

1. **Function call**:
   When you call `introduceMe()`, the function executes, logs two messages to the console, and hits the `return "ishaque"` statement.

2. **Return value**:
   The `return` statement sends the value `"ishaque"` back to where the function was called.

3. **Assign to variable**:
   The function call `introduceMe()` is assigned to the variable `value`. This means `value` now holds the string `"ishaque"`, which is the result of the function.

### Code flow:

```javascript
function introduceMe() {
    console.log("my name is ishaque");
    console.log("and i am a web developer");
    return "ishaque";  // Return value is sent here
}

let value = introduceMe();  // "ishaque" is returned and stored in 'value'
console.log(value);  // Output: "ishaque"
```

### Explanation:
- Although the **body of the function** is a separate scope, the **`return` statement** allows the function to send a value back to the calling scope. That’s why `value` holds the return value, even though it’s outside the function's body.

<br>

### Functions with Parameters

Functions can take one or more parameters, which are values you can pass to the function to customize its behavior.

#### Example: Function with Parameters

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
```

In this example, the `greet` function takes one parameter, `name`, and prints a personalized greeting.

<br>

### Functions with Return Values

Functions can return a value using the `return` statement. This allows the function to produce an output that can be used elsewhere in your code.

#### Example: Function with a Return Value

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
console.log(sum); // Output: 7
```

In this example, the `add` function takes two parameters, `a` and `b`, and returns their sum. The result is stored in the `sum` variable and printed to the console.

<br>

## Returning Values from Functions

Some functions, like `roundTo` and `square`, return a value. Others, like `makeNoise`, do not return a value but instead perform a side effect (e.g., logging to the console). The `return` statement is used to return a value from a function. When encountered, the function execution stops, and the specified value is returned.

- If a `return` statement is used without an expression, the function returns `undefined`.
- Functions without a `return` statement also return `undefined`.

### Example: Returning Undefined

```javascript
const doNothing = function() {
    return;
};

console.log(doNothing());
// → undefined
```

#### Explanation:

- `const doNothing = function() { return; };`: Defines a function `doNothing` that returns `undefined` because the `return` statement has no expression.
- `console.log(doNothing());`: Calls the `doNothing` function, which returns and logs `undefined`.

<br>

### Example: Square Function

This example defines a function `square` that returns the square of a given number:

```javascript
const square = function(x) {
    return x * x;
};

console.log(square(12));
// → 144
```

#### Explanation:

- `const square = function(x) { return x * x; };`: Defines a function `square` that takes one parameter `x` and returns the square of `x`.
- `console.log(square(12));`: Calls the `square` function with the argument `12` and logs the result, which is `144`.



### Example: makeNoise Function

This example defines a function `makeNoise` that logs a sound to the console:

```javascript
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!
```

#### Explanation:

- `const makeNoise = function() { console.log("Pling!"); };`: Defines a function `makeNoise` that takes no parameters and logs "Pling!" to the console.
- `makeNoise();`: Calls the `makeNoise` function, resulting in the log output.

---
<br>
<br>

# Why functions are not just objects:

In JavaScript, **functions are actually objects**, but they are treated as a special type called `"function"` because they have unique properties and behaviors that differentiate them from regular objects.


1. **Functions have executable code**:
   - Functions are **callable objects** that can be executed. They contain executable code that can be invoked using parentheses `()`.

   ```javascript
   function greet() {
       console.log("Hello!");
   }
   greet();  // This calls the function and prints "Hello!"
   ```

2. **Special properties**:
   - Functions have special properties, such as `length` (the number of arguments expected) and `prototype`, that regular objects do not have.
   
   ```javascript
   console.log(greet.length);  // 0 (no parameters in greet function)
   ```

3. **`typeof` function returns `"function"`**:
   - JavaScript defines `typeof` for functions to return `"function"` instead of `"object"` to make it easier to identify functions.

   ```javascript
   console.log(typeof greet);  // "function"
   ```

### Why `"function"` and not `"object"`:
- Functions are **still objects** (they can have properties, be assigned to variables, etc.), but they are **special objects** because they are executable. To avoid confusion and make identifying functions easier, JavaScript returns `"function"` for `typeof` checks on functions.
  
### In Summary:
Functions are treated as a separate type (`"function"`) because they have special capabilities (like being callable) and properties, even though they are technically objects under the hood.

---



