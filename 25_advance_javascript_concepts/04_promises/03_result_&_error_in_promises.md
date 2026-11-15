# JavaScript Promise Chaining with `result` & `error` Parameters (Complete Guide)

A comprehensive guide covering how to capture, pass, and handle `result` and `error` arguments across sequential Promise chains—progressing from basic database simulations to real-world asynchronous workflows.

---

## Table of Contents
- [1. How `result` and `error` Flow Through a Promise Chain](#1-how-result-and-error-flow-through-a-promise-chain)
- [2. Core Example: Sequential Database Saves (`saveToDb`)](#2-core-example-sequential-database-saves-savetodb)
  - [Complete Executable Code](#complete-executable-code)
  - [Console Outputs: Full Success vs. Mid-Chain Failure](#console-outputs-full-success-vs-mid-chain-failure)
- [3. Real-World Example 1: E-Commerce Checkout Pipeline](#3-real-world-example-1-e-commerce-checkout-pipeline)
  - [Complete Executable Code](#complete-executable-code-1)
  - [Step-by-Step Explanation](#step-by-step-explanation)
- [4. Real-World Example 2: User Authentication & Dashboard Data Fetching (Passing Data Forward)](#4-real-world-example-2-user-authentication--dashboard-data-fetching-passing-data-forward)
  - [Complete Executable Code](#complete-executable-code-2)
  - [Step-by-Step Explanation](#step-by-step-explanation-1)
- [5. Key Architectural Takeaways](#5-key-architectural-takeaways)

---

## 1. How `result` and `error` Flow Through a Promise Chain

In JavaScript, `result` and `error` are simply parameter variables inside `.then((result) => ...)` and `.catch((error) => ...)`. However, in a **Promise Chain**, data flows dynamically from one link to the next:

1. **Passing Data Forward (`resolve(value)` $\rightarrow$ `.then(result)`):**
   - Whatever value a Promise passes into `resolve(value)` becomes the `result` argument of the **immediately following** `.then(result)` block.
   - If that `.then()` returns a new Promise, the next `.then(result)` in the chain receives the resolved value of that **new** Promise.
2. **Short-Circuit Error Propagation (`reject(reason)` $\rightarrow$ `.catch(error)`):**
   - If **any** Promise in the chain calls `reject(reason)`, JavaScript immediately skips all remaining `.then()` blocks and jumps straight to the `.catch(error)` block at the bottom, passing `reason` into `error`.

---

## 2. Core Example: Sequential Database Saves (`saveToDb`)

In this foundational example, three pieces of data are saved sequentially. Each `.then()` prints the specific `result` message returned by the preceding `saveToDb()` call before triggering the next save.

### Complete Executable Code

```javascript
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve(`success: "${data}" was saved`);
        } else {
            reject(`failure: weak connection while saving "${data}"`);
        }
    });
}

saveToDb("apnna college")
    .then((result) => {
        console.log("data 1 saved");
        console.log("result of the promise :", result);
        return saveToDb("apna school");
    })
    .then((result) => {
        console.log("data 2 saved");
        console.log("result of the promise :", result);
        return saveToDb("apna ghr");
    })
    .then((result) => {
        console.log("data 3 saved");
        console.log("result of the promise :", result);
    })
    .catch((error) => {
        console.log("data not saved");
        console.log("error of promise :", error);
    });
```

### Console Outputs: Full Success vs. Mid-Chain Failure

**Case 1: All 3 Operations Succeed (`internetSpeed > 4` on every call)**
```text
data 1 saved
result of the promise : success: "apnna college" was saved
data 2 saved
result of the promise : success: "apna school" was saved
data 3 saved
result of the promise : success: "apna ghr" was saved
```

**Case 2: Operation 1 Succeeds, Operation 2 Fails (`internetSpeed <= 4` on the 2nd call)**
*Notice how `"apna ghr"` is never attempted, and `.catch()` pinpoints the exact step that failed:*
```text
data 1 saved
result of the promise : success: "apnna college" was saved
data not saved
error of promise : failure: weak connection while saving "apna school"
```

---

## 3. Real-World Example 1: E-Commerce Checkout Pipeline

In a real online store, placing an order requires three strictly dependent asynchronous steps:
1. **Verify Inventory** (Check if the item is in stock).
2. **Process Payment** (Charge the customer's card).
3. **Generate Shipping Label** (Dispatch the order to logistics).

If inventory is out of stock or the payment declines, the subsequent steps must **never** execute.

### Complete Executable Code

```javascript
function checkInventory(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = true; // Change to false to simulate out-of-stock failure
            if (inStock) {
                resolve(`Inventory confirmed for ${item}`);
            } else {
                reject(`Out of Stock: ${item} is currently unavailable`);
            }
        }, 1000);
    });
}

function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cardValid = true; // Change to false to simulate payment decline
            if (cardValid) {
                resolve(`Payment of $${amount} authorized (Txn ID: #98421)`); } else { reject(`Payment Declined: Insufficient funds for $${amount}`);
            }
        }, 1500);
    });
}

function shipOrder(address) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (address) {
                resolve(`Shipping label created for: ${address}`);
            } else {
                reject("Shipping Error: Delivery address is missing");
            }
        }, 1000);
    });
}

// Executing the Checkout Promise Chain
checkInventory("Mechanical Keyboard")
    .then((result) => {
        console.log("Step 1:", result);
        return processPayment(120);
    })
    .then((result) => {
        console.log("Step 2:", result);
        return shipOrder("221B Baker Street, London");
    })
    .then((result) => {
        console.log("Step 3:", result);
        console.log("Order Completed Successfully!");
    })
    .catch((error) => {
        console.error("Checkout Aborted ->", error);
    });
```

### Step-by-Step Explanation

1. **Sequential Timing (`1000ms` $\rightarrow$ `1500ms` $\rightarrow$ `1000ms`):** Each function returns a Promise wrapped around a `setTimeout` (simulating real backend API latency). The next step does not start until the current step calls `resolve()`.
2. **Dynamic `result` Logging:** Each `.then((result) => ...)` prints the exact confirmation string generated by the previous microservice (e.g., Transaction ID `#98421` from `processPayment`).
3. **Fail-Safe Protection:** If `cardValid` is set to `false` in Step 2, `processPayment` calls `reject(...)`. Step 3 (`shipOrder`) is completely bypassed so no unpaid item is shipped, and `.catch((error) => ...)` logs:
   `Checkout Aborted -> Payment Declined: Insufficient funds for $120`

---

## 4. Real-World Example 2: User Authentication & Dashboard Data Fetching (Passing Data Forward)

In complex applications, the output (`result`) of Step 1 is often required as the **input argument** for Step 2. For instance, you first authenticate a user to get their `userId`, and then use that `userId` to fetch their enrolled courses.

### Complete Executable Code

```javascript
function loginUser(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "student@vu.edu.pk") {
                // Resolving with an object containing user details
                resolve({ userId: "BC240401255", username: "Ishaque" });
            } else {
                reject("Auth Error: Invalid email address");
            }
        }, 1000);
    });
}

function fetchEnrolledCourses(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve({
                    studentId: userId,
                    courses: ["CS401 - Assembly Language", "Web Development", "DSA in C++"]
                });
            } else {
                reject("Database Error: Missing User ID");
            }
        }, 1200);
    });
}

// Chaining by feeding the result of Step 1 into Step 2
loginUser("student@vu.edu.pk")
    .then((userResult) => {
        console.log(`Welcome, ${userResult.username}! (ID:${userResult.userId})`);
        // Passing data extracted from Step 1's result into Step 2
        return fetchEnrolledCourses(userResult.userId);
    })
    .then((courseResult) => {
        console.log(`Courses for ${courseResult.studentId}:`, courseResult.courses);
    })
    .catch((error) => {
        console.error("Portal Load Failed ->", error);
    });
```

### Step-by-Step Explanation

1. **Resolving with Structured Objects:** `resolve()` is not limited to plain strings—it can pass full JavaScript objects (`{ userId, username }`) into the next `.then()`.
2. **Dependent Data Chaining:** Inside the first `.then((userResult) => ...)`, we extract `userResult.userId` and pass it directly as an argument into `return fetchEnrolledCourses(userResult.userId)`.
3. **Second `.then()` Execution:** Once `fetchEnrolledCourses` resolves, the second `.then((courseResult) => ...)` receives the course list object and displays it cleanly.
4. **Unified Error Boundary:** Whether login fails (wrong email) or course fetching fails (database issue), the single `.catch((error) => ...)` captures the exact `reject()` message.

---

## 5. Key Architectural Takeaways

- **Context-Specific `result`:** Every `.then((result) => ...)` receives the resolved payload strictly from the Promise returned immediately above it.
- **Data Pipelines:** You can pass strings, numbers, arrays, or objects through `resolve(data)` and feed them as arguments into subsequent Promise calls in the chain.
- **Single Error Funnel:** One `.catch((error) => ...)` at the end of a chain acts as a centralized error boundary for all preceding asynchronous operations.