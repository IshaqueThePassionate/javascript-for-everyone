# Hoisting in JavaScript

Hoisting is a JavaScript concept that explains how variable and function declarations are handled before the code is executed. Let’s break it down simply.

### What is Hoisting?

The term "hoisting" is not a normatively defined concept in the ECMAScript specification. Instead, it is a term introduced by developers to describe how JavaScript's variable and function declarations are processed before the code execution.

Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code is actually executed. This means that you can use functions and variables before they are declared in the code, but there are important differences between how hoisting works for variables and functions.


### How Does Hoisting Work?

- **Function Declarations**: Entire function declarations are hoisted, meaning you can call a function even before it appears in the code.

Example:

```javascript
greet(); // This works due to hoisting

function greet() {
  console.log('Hello, World!');
}
```

- **Variable Declarations (var, let, const)**:
  - Variables declared with `var` are **hoisted** but initialized as `undefined`. This means you can access them before their declaration, but they will return `undefined` until the line where they are assigned a value.

Example:

```javascript
console.log(name); // Output: undefined (due to hoisting)
var name = "Muhammad Hashim";
```

  - Variables declared with `let` and `const` are hoisted but not initialized. Accessing them before the declaration will throw a **ReferenceError** because they exist in a "temporal dead zone" from the start of the block until they are declared.

Example:

```javascript
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```

### Function Hoisting vs. Variable Hoisting

- **Function declarations** are fully hoisted, so you can use them even before declaring them.
- **Variable declarations** with `var` are partially hoisted (the declaration is hoisted, but the value is not), while `let` and `const` are block-scoped and behave differently due to the "temporal dead zone."


<br>

# What is the Temporal Dead Zone (TDZ)?

The **temporal dead zone (TDZ)** is the period between the start of the scope (where the variable is hoisted) and the point where the variable is declared and initialized. During this time, even though the variable is hoisted, it cannot be accessed. Any attempt to access it will result in a **ReferenceError**.

#### Key Points about TDZ:

1. **Exists for `let` and `const` variables**: Only `let` and `const` are affected by TDZ, not `var`.
2. **Time period**: The TDZ starts when the block begins (or when the function is called), and it ends when the variable is declared and initialized.
3. **Prevents usage before initialization**: This ensures that variables declared with `let` or `const` cannot be used before they are actually assigned a value.

Here’s a visual example of the TDZ:

```javascript
{
  // TDZ starts here for "count"
  
  // Trying to access "count" here will throw an error (ReferenceError)
  console.log(count); // ReferenceError: Cannot access 'count' before initialization
  
  let count = 10;  // TDZ ends here for "count"

  console.log(count); // Output: 10
}
```

In the above block, the TDZ for the variable `count` starts when the block begins and ends when `count` is declared and initialized with the value `10`.

---

### Summary

- **`var`** declarations are hoisted and initialized with `undefined`, which is why accessing them before initialization returns `undefined`.
- **`let`** and **`const`** are hoisted but not initialized, and they remain in the **temporal dead zone (TDZ)** until the point of declaration, causing a **ReferenceError** if accessed before initialization.
- The **temporal dead zone** is the period during which a `let` or `const` variable exists but cannot be accessed until it is initialized.

