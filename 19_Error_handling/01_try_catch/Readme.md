# JavaScript `try...catch` (Simple Guide)

## What is `try...catch`?

In JavaScript, errors (exceptions) can crash your entire script and stop the code from executing further.

The `try...catch` statement allows you to **catch** errors gracefully, handle them without crashing the program, and keep the rest of your application running.

---

## 1. Basic Syntax

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code that runs ONLY if an error occurs inside try
} finally {
  // (Optional) Code that ALWAYS runs, error or no error
}
```

---

## 2. Why Do We Need It? (Before vs After)

### Without `try...catch` (Code Crashes)
```javascript
console.log("Program starts");

// ReferenceError: nonExistentVariable is not defined
console.log(nonExistentVariable);

// This line will NEVER run because the program crashed above!
console.log("Program ends successfully");
```

### With `try...catch` (Crash Prevented)
```javascript
console.log("Program starts");

try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log("An error occurred, but we handled it!");
  console.log("Error details:", error.message);
}

// Program continues smoothly
console.log("Program ends successfully");
```

**Output:**
```text
Program starts
An error occurred, but we handled it!
Error details: nonExistentVariable is not defined
Program ends successfully
```

---

## 3. Understanding the `error` Object

When an error occurs, JavaScript creates an object containing helpful information:
* `error.name`: The type of error (e.g., `ReferenceError`, `TypeError`, `SyntaxError`).
* `error.message`: A clear text description of what went wrong.

```javascript
try {
  let num = 10;
  num.toUpperCase(); // TypeError: numbers do not have toUpperCase
} catch (err) {
  console.log("Type:", err.name);       // Output: TypeError
  console.log("Message:", err.message); // Output: num.toUpperCase is not a function
}
```

---

## 4. Throwing Custom Errors (`throw`)

You can create your own custom errors using the `throw` keyword to stop invalid operations.

```javascript
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      // Create and throw a custom error
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  } catch (err) {
    console.log("Error Caught:", err.message);
    return null;
  }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Error Caught: Division by zero is not allowed! -> null
```

---

## 5. The `finally` Block

The `finally` block runs **regardless of the outcome**—whether the code ran cleanly or threw an error. It is commonly used for clean-up tasks (like closing database connections or stopping loading spinners).

```javascript
function loadUserData() {
  console.log("Loading spinner started...");

  try {
    // Simulating an operation that fails
    throw new Error("Network timeout!");
  } catch (err) {
    console.log("Handling error:", err.message);
  } finally {
    // This always executes
    console.log("Loading spinner stopped.");
  }
}

loadUserData();
```

**Output:**
```text
Loading spinner started...
Handling error: Network timeout!
Loading spinner stopped.
```

---

## 6. Important Rule: Synchronous Only

`try...catch` works **synchronously**. It cannot catch errors thrown inside asynchronous timers like `setTimeout` directly.

```javascript
// ❌ WRONG: try...catch cannot catch this error
try {
  setTimeout(() => {
    noSuchFunction(); // Error crashes the app!
  }, 1000);
} catch (err) {
  console.log("Will not run!");
}

// ✅ CORRECT: Place try...catch INSIDE the asynchronous callback
setTimeout(() => {
  try {
    noSuchFunction();
  } catch (err) {
    console.log("Successfully caught inside timer:", err.message);
  }
}, 1000);
```

---

## Summary Cheat Sheet

| Keyword | Role |
| :--- | :--- |
| **`try`** | Wraps the risky code block you want to test. |
| **`catch (error)`** | Executes only when an error happens inside `try`. |
| **`throw`** | Manually generates a new error (`throw new Error(...)`). |
| **`finally`** | Always executes at the very end for cleanup tasks. |