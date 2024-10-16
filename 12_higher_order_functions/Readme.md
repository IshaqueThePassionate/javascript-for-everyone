
Here's the README file about higher-order functions in JavaScript without emojis:

---

# Higher-Order Functions in JavaScript

Higher-order functions are a fundamental concept in JavaScript that allow for more flexible and modular code. Let's understand what they are and how they work.

## What is a Higher-Order Function?

A **higher-order function** is a function that:

1. **Takes other functions as arguments**.
2. **Returns a function as a result**.

This ability makes JavaScript more powerful by enabling functional programming concepts, allowing you to write cleaner, reusable, and more organized code.

## Why Use Higher-Order Functions?

- **Code Reusability:** You can reuse the same function in different scenarios by passing different functions as arguments.
- **Modularity:** Break down complex problems into smaller, more manageable functions.
- **Flexibility:** Functions can behave differently based on the functions passed to them.



---

### Inital Code example

Let's break down and explain the code:
This code demonstrates the concept of **higher-order functions** and **callbacks** in JavaScript.

### Code:

```javascript
function callbackFunction() {
    console.log("I am a callback function");
 }

function higherOrderFunction(b) {
    console.log("I am a higher order function");
    b();
}

higherOrderFunction(callbackFunction);
```

### Explanation:

1. **Callback Function:**
   - The function `callbackFunction` is defined to print a message:
     ```javascript
     function callbackFunction() {
         console.log("I am a callback function");
     }
     ```
   - This function doesn't do anything complex; it just displays a simple message.

2. **Higher-Order Function:**
   - The function `higherOrderFunction` takes a **parameter `b`**, which is expected to be a function:
     ```javascript
     function higherOrderFunction(b) {
         console.log("I am a higher order function");
         b();
     }
     ```
   - Inside `higherOrderFunction`, it prints `"I am a higher order function"` and then **calls `b()`**.
   - Since `b` is a function, when `higherOrderFunction` is called, `b()` will execute whatever function is passed as an argument.

3. **Calling the Higher-Order Function:**
   - The line:
     ```javascript
     higherOrderFunction(callbackFunction);
     ```
   - Here, `callbackFunction` is passed as an argument to `higherOrderFunction`.
   - This means `b` inside `higherOrderFunction` will now refer to `callbackFunction`.
   - When `b()` is called inside `higherOrderFunction`, it will actually run `callbackFunction`.

### Output:
When this code runs, you will see the following output:
```
I am a higher order function
I am a callback function
```

**Summary:**
- `higherOrderFunction` is called a **higher-order function** because it takes another function (`callbackFunction`) as an argument.
- `callbackFunction` is a **callback** because it is passed to another function (`higherOrderFunction`) to be executed later.

This concept is commonly used in JavaScript for tasks like **event handling**, **asynchronous operations**, and more, allowing functions to be more flexible and reusable.

## Examples of Higher-Order Functions

### 1. Taking a Function as an Argument

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

function displayGreeting(greetFunction, userName) {
    console.log(greetFunction(userName));
}

displayGreeting(greet, "Muhammad Hashim");
```

**Explanation:**  
In the example above, `displayGreeting` is a higher-order function because it takes another function (`greet`) as an argument and uses it within its own logic.

### 2. Returning a Function

```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

**Explanation:**  
Here, `multiplier` is a higher-order function because it returns another function. The `double` variable becomes a new function that multiplies any input by 2.

<!-- --------------------------------------------------------------------------------- -->

## How Higher-Order Functions Work

Suppose you want to write a function that processes data about different items. As a beginner, the first solution that comes to mind is to write separate functions for different tasks, like converting item names to uppercase or calculating discounted prices.

### Initial Approach

```javascript
const items = ["apple", "banana", "cherry"];
// function to convert item names to uppercase
const toUpperCase = function (items) {
    const output = [];
    for (let i = 0; i < items.length; i++) {
        output.push(items[i].toUpperCase());
    }
    return output;
}
// function to calculate discounted prices
const getDiscountedPrice = function (prices) {
    const discount = 0.1; // 10% discount
    const output = [];
    for (let i = 0; i < prices.length; i++) {
        output.push(prices[i] * (1 - discount));
    }
    return output;
}
console.log(toUpperCase(items));
console.log(getDiscountedPrice([100, 200, 300]));
```

**Problem:**  
In the above code, we are writing almost the same function repeatedly with slightly different logic. Also, the functions aren't reusable. We need a more efficient way to handle this.

## Using Higher-Order Functions to Improve the Code

Let's see how we can rewrite the same functionality using HOFs:

### Improved Approach with HOFs

```javascript
const items = ["apple", "banana", "cherry"];
// logic to convert names to uppercase
const uppercaseLogic = function (item) {
    return item.toUpperCase();
}
// logic to calculate discounted prices
const discountLogic = function (price) {
    const discount = 0.1; // 10% discount
    return price * (1 - discount);
}
// a reusable function to process items
const processItems = function (list, logic) {
    const output = [];
    for (let i = 0; i < list.length; i++) {
        output.push(logic(list[i]))
    }
    return output;
}
console.log(processItems(items, uppercaseLogic));
console.log(processItems([100, 200, 300], discountLogic));
```

**Explanation:**  
With HOFs, we only need to write a single function `processItems()` to handle multiple tasks. We can write specific logic and pass it to `processItems()`, which makes our code concise and modular. Each function does its own job, and we avoid unnecessary repetition.

## Extending Functionality with HOFs

Suppose in the future, we want to write a program to find the length of each item's name. We can simply write the logic to get the length and pass it to the `processItems()` function.

### Example: Finding Length of Each Item

```javascript
const getLength = function (item) {
    return item.length;
}
console.log(processItems(items, getLength));
```

## Common Higher-Order Functions in JavaScript

JavaScript has several built-in higher-order functions that are frequently used:

- **Array.map()** - Creates a new array by applying a function to each element.
- **Array.filter()** - Filters elements in an array based on a provided function.
- **Array.reduce()** - Reduces an array to a single value by applying a function.

We will further disscuss about these in next step