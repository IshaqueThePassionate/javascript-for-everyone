## Callbacks

### What is a Callback?


In JavaScript, a **callback function** is a function that is passed **as a parameter** to another function. This means you pass a function as an argument to another function, and that function **only gets executed when called** within the receiving function.

### Breakdown:

- A callback is a function that you pass **as a parameter** into another function.
- Then, when the other function runs, it can **call that callback function** whenever needed.

The benefit of using callbacks is that they help make your code **reusable** and **modular**. Callbacks are often used when dealing with **asynchronous operations** like API calls, file reading, or `setTimeout`.

### A simple example:

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // This calls the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback
greet("Ahmed", sayGoodbye);
```

### Output:
```
Hello, Ahmed
Goodbye!
```

In this example, `sayGoodbye` is a callback function that is passed as a parameter to `greet`. Then, it's called inside the `greet` function.

### Why pass the function without parentheses?

When you pass a function like `sayGoodbye`, you're passing **its reference**—meaning it will be called later. But if you pass it like `sayGoodbye()`, it gets **executed immediately**, which isn’t what you want in a callback.

### Example:
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Calls the callback function here
}

function sayGoodbye() {
    console.log("Goodbye");
}

// Pass `sayGoodbye` as a callback function
greet("Ahsan", sayGoodbye);
```

### Output:
```
Hello, Ahsan
Goodbye!
```

Here, `sayGoodbye` is the callback. It only gets called **inside** `greet()` when needed. That's the power of callbacks!


### Why Use Callbacks?

- They allow you to execute code only after an operation is complete.
- Provide a way to handle tasks that take time to complete without blocking the execution of other code.

### Callback Examples

1. **Order Processing Example**
   ```javascript
   function processPayment(amount, callback) {
       console.log(`Processing payment of $${amount}`);
       callback(amount);
   }

   function paymentSuccess(amount) {
       console.log(`Payment successful: $${amount}`);
   }

   function paymentFailure(amount) {
       console.log(`Payment failed for amount: $${amount}`);
   }

   processPayment(100, paymentSuccess); // Output:
   // Processing payment of $100
   // Payment successful: $100

   processPayment(200, paymentFailure); // Output:
   // Processing payment of $200
   // Payment failed for amount: $200
   ```

2. **User Notification Example**
   ```javascript
   function notifyUser(user, callback) {
       console.log(`Notifying user: ${user}`);
       callback(user);
   }

   function welcomeMessage(user) {
       console.log(`Welcome, ${user}!`);
   }

   function goodbyeMessage(user) {
       console.log(`Goodbye, ${user}. See you soon!`);
   }

   notifyUser("Muhammad Hashim", welcomeMessage); // Output:
   // Notifying user: Muhammad Hashim
   // Welcome, Muhammad Hashim!

   notifyUser("Ibrahim", goodbyeMessage); // Output:
   // Notifying user: Ibrahim
   // Goodbye, Ibrahim. See you soon!
   ```

---

### Synchronous vs Asynchronous Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Fetched data");
    }, 2000);
}

function handleData(data) {
    console.log("Handling:", data);
}

fetchData(handleData);
```

---

### Handling Errors in Callbacks

```javascript
function fetchUserData(userId, callback) {
    setTimeout(() => {
        if (userId <= 0) {
            callback("Invalid User ID", null);
        } else {
            callback(null, { id: userId, name: "Muhammad Hashim" });
        }
    }, 1000);
}

function handleResponse(error, data) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("User Data:", data);
    }
}

fetchUserData(1, handleResponse);
fetchUserData(-1, handleResponse);
```

