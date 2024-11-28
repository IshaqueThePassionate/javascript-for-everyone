# JavaScript Higher-Order Functions and Callbacks

## Introduction

In JavaScript, functions are treated as **first-class citizens**, meaning they can be assigned to variables, passed as arguments, and returned from other functions. This concept enables two powerful techniques in JavaScript: **Higher-Order Functions** and **Callbacks**.

---

## Higher-Order Functions

### What is a Higher-Order Function?

A **higher-order function** is a function that:

1. **Takes other functions as arguments**.
2. **Returns a function as a result**.

This ability makes JavaScript more powerful by enabling functional programming concepts, allowing you to write cleaner, reusable, and more organized code.

### Why Use Higher-Order Functions?

- **Code Reusability**: Reuse the same function in different scenarios by passing different functions as arguments.
- **Modularity**: Break down complex problems into smaller, more manageable functions.
- **Flexibility**: Functions can behave differently based on the functions passed to them.

### Initial Example

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

**Output:**
```
I am a higher order function
I am a callback function
```

---

### Examples of Higher-Order Functions

1. **Taking a Function as an Argument**
   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }

   function displayGreeting(greetFunction, userName) {
       console.log(greetFunction(userName));
   }

   displayGreeting(greet, "Muhammad Ishaque");
   ```

2. **Returning a Function**
   ```javascript
   function multiplier(factor) {
       return function(number) {
           return number * factor;
       };
   }

   const double = multiplier(2);
   console.log(double(5)); // Output: 10
   ```

3. **String Transformation Example**
   ```javascript
   function transformString(transform, str) {
       const result = transform(str);
       return result;
   }

   function touppercase(string) {
       return string.toUpperCase();
   }

   function tolowercase(anotherString) {
       return anotherString.toLowerCase();
   }

   const upperResult = transformString(touppercase, "Muhammad Ishaque");
   console.log("Uppercase Result:", upperResult);

   const lowerResult = transformString(tolowercase, "Muhammad Ishaque");
   console.log("Lowercase Result:", lowerResult);
   ```

   **Output:**
   ```
   Uppercase Result: MUHAMMAD ISAHAQUE
   Lowercase Result: muhammad ishaque
   ```

---

### How Higher-Order Functions Work

```javascript
const items = ["apple", "banana", "cherry"];
const uppercaseLogic = function (item) {
    return item.toUpperCase();
};
const discountLogic = function (price) {
    const discount = 0.1;
    return price * (1 - discount);
};
const processItems = function (list, logic) {
    const output = [];
    for (let i = 0; i < list.length; i++) {
        output.push(logic(list[i]));
    }
    return output;
};
console.log(processItems(items, uppercaseLogic));
console.log(processItems([100, 200, 300], discountLogic));
```




