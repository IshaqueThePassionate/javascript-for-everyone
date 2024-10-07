
# JavaScript Closures

A **closure** in JavaScript is a function that retains access to variables from its outer scope, even after the outer scope has finished executing. This behavior allows functions to "remember" the environment in which they were created, leading to powerful programming techniques like data encapsulation and function factories.

---

## What is a Closure?

A closure occurs when a function is defined inside another function and retains access to the variables of the outer function, even after the outer function has completed execution. The inner function "closes over" the outer function’s scope, preserving those variables for later use.

### Example:

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable:', outerVariable);
    console.log('Inner Variable:', innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');
```

**Explanation**:
- The `outerFunction` takes one argument (`outerVariable`) and returns the `innerFunction`.
- When `outerFunction` is called, it returns the `innerFunction` with access to `outerVariable`, even though `outerFunction` has finished executing.
- The inner function `newFunction` is still able to log both `outerVariable` and `innerVariable`, demonstrating closure.

---

## Key Features of Closures

### 1. Persistent Scope

Closures allow a function to retain access to variables from its containing scope, even after that scope has returned. This is key to creating private variables or functions that preserve state across multiple calls.

### 2. Encapsulation

Closures help in creating "private" variables that can't be accessed from outside the function. These variables are hidden in the closure, and only specific parts of the function can interact with them.

### Example:

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // → 1
console.log(counter()); // → 2
console.log(counter()); // → 3
```

In this example, the `createCounter` function returns a function that maintains access to `count`, which is updated every time the inner function is called. This encapsulates the `count` variable, making it private to the returned function.

---

## Closure and Higher-order Functions

Closures are often used in **higher-order functions**—functions that return other functions or accept functions as arguments.

### Practical Example of Higher-order Functions:

```javascript
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // → 10
```

**Explanation**:
- `multiplier` takes a `factor` and returns a function that multiplies any given number by that `factor`.
- Even after `multiplier` has completed, the returned function (`twice`) retains access to `factor`, allowing it to multiply any number by `2`.

---

## Closure in Action: Wrapping Values

Closures can be used to wrap and store specific values within a function, which can be accessed later via the returned function.

### Example:

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // → 1
console.log(wrap2()); // → 2
```

**Explanation**:
- `wrapValue` creates a local variable `local` and returns a function that returns this local value.
- The returned functions `wrap1` and `wrap2` retain access to their own instance of `local`, demonstrating that closures store different instances of local variables for each call.

---

## Default Parameters and Closures

In JavaScript, you can assign default values to function parameters, which work seamlessly with closures. When a parameter is not provided, it falls back to its default value, and the closure retains this state.

### Example:

```javascript
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(4.5));      // → 5 (default step = 1)
console.log(roundTo(4.5, 2));   // → 4 (step = 2)
```

Here, the `roundTo` function uses default parameters (`step = 1`) if no second argument is passed. The closure allows it to remember the default value or the provided value across multiple calls.

---

## Closures and Arguments

Closures are also useful when dealing with functions that take a variable number of arguments, like `console.log`. You can create flexible functions that handle any number of arguments by using closures and argument lists.

### Example:

```javascript
function collectArgs(...args) {
  return () => {
    console.log(...args);
  };
}

const logArgs = collectArgs(1, 2, 3);
logArgs(); // → 1 2 3
```

This example shows a function `collectArgs` that gathers all passed arguments and returns a closure. The closure retains access to the arguments and logs them when invoked.

---

Let's look at a practical example of closures in the context of a **simple shopping cart** feature:


## Example: Shopping Cart

Imagine you want to create a simple shopping cart where users can add items, view the total price, and see all items in the cart. Closures can be used to store the cart's state privately and allow controlled access to add items or view the cart.

```javascript
function createShoppingCart() {
  let items = []; // Private array to hold items

  return {
    addItem: function(item, price) {
      items.push({ item, price });
      console.log(`${item} added to the cart.`);
    },
    getTotal: function() {
      return items.reduce((total, currentItem) => total + currentItem.price, 0);
    },
    getItems: function() {
      return items.slice(); // Return a copy of the items array
    }
  };
}

const cart = createShoppingCart();

// Adding items to the cart
cart.addItem("Apple", 1.99);   // Output: "Apple added to the cart."
cart.addItem("Banana", 0.99);  // Output: "Banana added to the cart."

// Viewing total price
console.log("Total Price: $" + cart.getTotal()); // Output: Total Price: $2.98

// Viewing all items in the cart
console.log("Items in Cart:", cart.getItems());  
// Output: Items in Cart: [ { item: 'Apple', price: 1.99 }, { item: 'Banana', price: 0.99 } ]
```

### How This Uses a Closure
- The `createShoppingCart` function defines a private `items` array, which holds the items added to the cart.
- It returns an object containing three methods (`addItem`, `getTotal`, and `getItems`).
- These methods form a closure, having access to the `items` array even after `createShoppingCart` has finished executing.
- This setup keeps `items` private and allows controlled access, mimicking a shopping cart in an e-commerce application.




## Conclusion: Understanding Closures in JavaScript

- A **closure** is created when a function retains access to the variables in its outer scope.
- Closures enable powerful programming techniques like **data encapsulation**, **private variables**, and **higher-order functions**.
- JavaScript functions, combined with closures, can hold both code and the environment in which they were created, allowing functions to preserve state even after their outer scope has exited.

Closures are a foundational concept in JavaScript, making it possible to write more flexible and reusable code.
