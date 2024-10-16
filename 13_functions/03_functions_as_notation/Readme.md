
# JavaScript Functions: Notations and Values

## 1. Functions as Values

In JavaScript, functions are treated like regular values, meaning they can be assigned to variables, passed as arguments to other functions, or returned as results. Here’s a deeper look at how functions behave as values:

- A **function binding** usually serves as a name for a specific piece of code.
- Functions can be assigned to variables and **reassigned** (if declared with `let` or `var`).
- Functions can be **passed as arguments** to other functions and used in expressions, just like any other value.

### Example:

```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function() { /* do nothing */ };
}
```

In this example, the function `launchMissiles` is first defined to launch missiles but is later reassigned to do nothing if `safeMode` is active. This shows how functions, like other values, can be dynamically reassigned.

---

## 2. Function Declaration Notation

A **function declaration** is a more traditional way of defining functions in JavaScript. It begins with the `function` keyword, followed by the function name and parameters. Function declarations are **hoisted**, meaning they are available for use throughout their scope even before they are declared.

### Example:

```javascript
function square(x) {
  return x * x;
}
```

In this example, `square` is a function declaration. You can call this function before it’s defined because function declarations are hoisted.

### Hoisting in Function Declarations:

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

In the above code, the function `future()` is called before its actual definition, but it still works due to **hoisting**. The function declaration is moved to the top of its scope during the compilation phase, allowing it to be used before the line where it is defined.

---

## 3. Arrow Functions

Arrow functions were introduced in ES6 (2015) and offer a more concise syntax for writing functions. They are particularly useful for short function expressions. Arrow functions also behave differently when it comes to the `this` keyword, as they do not have their own `this` context.

### Arrow Function Syntax:

```javascript
const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};
```

### Short Arrow Functions:
If your function has only one parameter and a single expression, you can write it in an even shorter form:

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x; // Equivalent, but shorter
```

For functions with no parameters, just use empty parentheses:

```javascript
const horn = () => {
  console.log("Toot");
};
```

---

### 4. Combining with Functions as Values

Arrow functions and traditional function expressions can both be used as values in JavaScript. This allows for flexible function assignment and usage across your code. For example:

```javascript
let greet = (name) => {
  console.log("Hello " + name);
};

greet("Harry");  // Output: Hello Harry
```

In this example, an arrow function is stored in the variable `greet`, and it behaves like any other function.

---

### Conclusion

JavaScript offers multiple ways to define and work with functions, making them extremely versatile. Functions can be used as values, declared with function declarations, or written concisely with arrow functions. Each of these methods has its own use case, and understanding them helps in writing flexible and clean JavaScript code.