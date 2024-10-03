
# Understanding the JavaScript Call Stack

In JavaScript, the **call stack** is a mechanism that tracks the execution of functions. Whenever a function is called, it gets added to the call stack, and once the function completes its task, it is removed from the stack. The purpose of the call stack is to ensure that functions execute in the correct order, one after the other, following the **Last In, First Out (LIFO)** principle.

<br>

# LIFO (Last In, First Out)

**LIFO** stands for **Last In, First Out**, meaning the item that is added last is the one removed first. This means that the element or item placed last in the stack is the first one to be taken out. This concept is used in stacks, like the call stack in JavaScript.

<br>

<img src="./images/call stack in js .PNG">

<br>
<br>

# Single-threaded

The JavaScript call stack is **single-threaded**, meaning it can handle only one task at a time. Because of this, synchronous code executes one operation at a time, and the next operation doesn't start until the current one is complete.

```javascript
function firstTask() {
  console.log("First task is running.");
}

function secondTask() {
  console.log("Second task is running.");
}

firstTask();  // Runs first
secondTask(); // Runs after the first task is complete
```

### Output:
```
First task is running.
Second task is running.
```

In this example, the `firstTask()` is executed completely before the `secondTask()` starts. Since JavaScript is single-threaded, it processes these tasks one at a time in the order they appear.


### Problem Statement
How does JavaScript manage the flow of control between functions during program execution, and how does it store context for function calls? 


## Example 1: A Simple Program

Here’s a simple example that demonstrates how the call stack works:

```javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

### Call Stack Breakdown:

1. **greet("Harry")** is called, so the `greet` function is pushed onto the call stack.
2. Inside `greet`, `console.log("Hello Harry")` is called. The `console.log` function is added to the stack.
3. Once `console.log` finishes logging, it is removed from the stack, and control goes back to the `greet` function.
4. The `greet` function completes, so it is removed from the call stack, and control goes back to the main program.
5. Next, `console.log("Bye")` is called, which is added to the stack.
6. After `console.log` finishes logging `"Bye"`, it is removed from the stack, and the program ends.

### Control Flow:
The flow of control through the functions can be visualized like this:

```
not in function
in greet
in console.log
in greet
not in function
in console.log
not in function
```

The **Call Stack** stores where each function was called from, ensuring that when a function finishes, control returns to the correct place.

---

## Example 2: Stack Overflow with Recursive Functions

If a function calls itself (or calls another function that calls it back), the call stack keeps growing. If the recursion doesn’t stop, this leads to a **Stack Overflow** because the call stack exceeds the memory limit.

Here’s an example of infinite recursion:

```javascript
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??
```

### Explanation:

- When the `chicken()` function is called, it calls `egg()`, which calls `chicken()`, and this cycle continues endlessly.
- Since there’s no end to this recursion, the stack keeps adding new function calls until it runs out of space, leading to an error known as **stack overflow**.
- JavaScript cannot handle infinite recursion because the call stack has a limited size, and too many function calls without finishing will cause it to "blow the stack."

### Common Error:
When this happens, you might see an error like:
```
RangeError: Maximum call stack size exceeded
```

---

## How the Call Stack Works

1. **Function Calls**:
   - Every time a function is called, its context is pushed onto the stack.
   - This context includes where the function was called from and what it needs to return to.
   
2. **Function Returns**:
   - When a function completes, the top context is removed from the stack, and the program resumes execution from where the function was called.
   
3. **Stack Overflow**:
   - If a function calls another function (or itself) without stopping, the stack keeps growing until the memory limit is exceeded.

---

## Example 3: Another Call Stack Demo

```javascript
function first() {
  console.log("First function");
}

function second() {
  first(); // Calls the first function
  console.log("Second function");
}

second();
```

### Breakdown:

1. `second()` is pushed onto the call stack.
2. Inside `second()`, `first()` is called and pushed onto the stack.
3. `first()` logs `"First function"` and completes, so it is removed from the stack.
4. `second()` logs `"Second function"` and completes, so it is removed from the stack.

This process helps to maintain the flow of the program while managing function calls in order.

---

## Conclusion

The **Call Stack** in JavaScript is a crucial mechanism for managing function calls and program control. Each time a function is called, it is added to the stack, and when it returns, it is removed. Understanding the call stack helps in writing better code and avoiding errors like stack overflow, especially when dealing with recursion or deep function calls.


