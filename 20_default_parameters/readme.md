# JavaScript Default Parameters 

## 1. What are Default Parameters?

### Definition:
JavaScript Default Parameters, introduced in ECMAScript 2015 (ES6), allow named parameters of a function to be initialized with default values if no value or `undefined` is passed during the function invocation. Prior to ES6, function parameters evaluated to `undefined` by default when omitted, requiring manual conditional checks or logical short-circuiting inside the function body to assign fallback values.

### Core Characteristics of Default Parameters:
- **Fallback on `undefined`:** A default parameter triggers *only* if the argument is omitted or explicitly passed as `undefined`.
- **Falsy Values Are Preserved:** Valid falsy values such as `null`, `false`, `0`, `""`, and `NaN` do **not** trigger the default parameter; they are treated as valid incoming arguments.
- **Left-to-Right Evaluation:** Default parameters are evaluated at call time from left to right, allowing subsequent parameters to reference preceding parameters.
- **Temporal Dead Zone (TDZ):** Parameters have their own scope; a preceding parameter cannot reference a parameter declared after it.
- **Function/Expression Support:** Default values are not limited to primitives; they can be function calls, calculations, objects, or arrays evaluated dynamically per invocation.

---

## 2. Syntax & Basic Demonstration

### Understanding the Upgrade: Pre-ES6 vs Modern ES6 Syntax
Historically, developers relied on logical OR operators (`||`) or explicit `typeof` checks inside the function body to prevent `undefined` values from breaking operations. In modern ES6, default values are directly assigned within the parameter signature itself, which significantly improves code readability and reduces defensive boilerplate code.

```javascript
// Pre-ES6 approach: Manual type-checking or short-circuit evaluation
function greetOld(name) {
  // If name is undefined, assign fallback
  name = typeof name !== "undefined" ? name : "Guest";
  return "Welcome, " + name + "!";
}

// ES6 approach: Direct assignment inside parameter list
function greet(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(greet());          // Output: Welcome, Guest!
console.log(greet("Ishaque"));  // Output: Welcome, Ishaque!
console.log(greet(undefined));  // Output: Welcome, Guest! (Triggers default)
console.log(greet(null));       // Output: Welcome, null! (null is a valid value, no trigger)
```

---

## 3. The `undefined` vs `null` Behavior

### Critical Distinction: Primitive `undefined` vs Valid Falsy Inputs
A frequent source of bugs in JavaScript functions is confusing `undefined` with other falsy values like `null` or `0`. Default parameters specifically evaluate against the absence of a value (`undefined`). When a developer explicitly passes `null` or `0`, JavaScript treats this as an intentional assignment, meaning default parameters will not trigger.

```javascript
function calculateTax(amount, rate = 0.05) {
  return amount * rate;
}

// 1. Argument omitted -> uses 0.05
console.log(calculateTax(1000));            // Output: 50

// 2. Explicit undefined -> triggers default (0.05)
console.log(calculateTax(1000, undefined));  // Output: 50

// 3. Explicit null -> does NOT trigger default (null coerces to 0)
console.log(calculateTax(1000, null));       // Output: 0

// 4. Passing 0 -> valid number, does NOT trigger default
console.log(calculateTax(1000, 0));          // Output: 0
```

---

## 4. Referencing Preceding Parameters

### Dynamic Parameter Computation and Parameter Scoping
Parameters declared in a function signature are evaluated sequentially from left to right. This allows subsequent parameters to access, calculate, and derive their fallback values directly from earlier parameters in the same function call. However, attempting to reference a parameter that appears later will trigger a `ReferenceError` due to the Temporal Dead Zone (TDZ).

```javascript
// 'tax' uses 'price' dynamically if not provided
function calculateTotal(price, tax = price * 0.18, discount = 0) {
  return price + tax - discount;
}

console.log(calculateTotal(100));          // Output: 118 (tax = 100 * 0.18 = 18)
console.log(calculateTotal(100, 10));      // Output: 110 (custom tax = 10)
console.log(calculateTotal(100, 10, 5));   // Output: 105 (custom tax = 10, discount = 5)

// Note on Temporal Dead Zone (TDZ):
// function invalid(a = b, b = 2) {} -> Throws ReferenceError if 'a' runs before 'b' is defined
```

---

## 5. Dynamic Expressions and Function Calls as Defaults

### Lazy Evaluation and Runtime Execution
In JavaScript, default parameters are not calculated at parse time or when the function is defined. Instead, they are lazily evaluated at runtime—meaning if an argument is passed, the default expression is completely skipped. This feature makes it safe and efficient to use dynamic calculations, timestamp generators, or external helper functions as default assignments.

```javascript
// Helper function to generate an automated unique ID
function generateId() {
  return "UID-" + Math.floor(Math.random() * 9000 + 1000);
}

// 'userId' calls generateId() ONLY if no id argument is provided
function createUser(username, role = "Student", userId = generateId()) {
  return {
    userId,
    username,
    role
  };
}

const userOne = createUser("Ishaque");
console.log(userOne);
// Output: { userId: 'UID-4821', username: 'Ishaque', role: 'Student' } (Random ID generated)

const userTwo = createUser("AdminUser", "Administrator", "CUSTOM-001");
console.log(userTwo);
// Output: { userId: 'CUSTOM-001', username: 'AdminUser', role: 'Administrator' } (generateId was skipped)
```

---

## 6. Real-World Applications

### Example 1: API Request Utility / HTTP Client Options

#### Scenario Context:
When communicating with backend REST endpoints, standard parameters such as the HTTP method (`GET`), content headers (`application/json`), and request timeouts should have safe production defaults. Default parameters eliminate the need to repeatedly provide standard network configurations while still allowing full override capability for custom operations (such as `POST` requests with authentication tokens).

```javascript
// Step 1: Define API fetch wrapper with robust fallback parameters
function apiRequest(
  endpoint,
  method = "GET",
  headers = { "Content-Type": "application/json" },
  timeout = 5000
) {
  const requestConfig = {
    endpoint,
    method,
    headers,
    timeout
  };

  // Simulated request logger
  return `Making ${requestConfig.method} request to ${requestConfig.endpoint} with ${requestConfig.timeout}ms timeout.`;
}

// Call with mandatory parameter only
const defaultFetch = apiRequest("/api/v1/courses");
console.log(defaultFetch);
// Output: Making GET request to /api/v1/courses with 5000ms timeout.

// Call with overrides
const postFetch = apiRequest(
  "/api/v1/courses/create",
  "POST",
  { "Authorization": "Bearer TOKEN_XYZ", "Content-Type": "application/json" },
  10000
);
console.log(postFetch);
// Output: Making POST request to /api/v1/courses/create with 10000ms timeout.
```

### Example 2: Pagination Engine for Data Grids / Lists

#### Scenario Context:
Data tables, admin dashboards, and list interfaces rely heavily on pagination algorithms to slice datasets into manageable chunks. If a client UI or API query fails to send page coordinates, default parameters ensure that the system automatically defaults to page `1` and a standard chunk size (e.g., `3` or `10` items), preventing server errors or empty views.

```javascript
// Step 1: Mock dataset of records
const students = [
  "Student 1", "Student 2", "Student 3", "Student 4", 
  "Student 5", "Student 6", "Student 7", "Student 8"
];

// Step 2: Pagination controller with default page = 1 and pageSize = 3
function paginateRecords(records = [], page = 1, pageSize = 3) {
  // Defensive calculation against negative or zero page values
  const currentPage = Math.max(1, page);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = records.slice(startIndex, endIndex);

  return {
    currentPage,
    pageSize,
    totalRecords: records.length,
    totalPages: Math.ceil(records.length / pageSize),
    data: paginatedData
  };
}

// Request page 1 by default without passing arguments
console.log(paginateRecords(students));
// Output:
// {
//   currentPage: 1,
//   pageSize: 3,
//   totalRecords: 8,
//   totalPages: 3,
//   data: [ 'Student 1', 'Student 2', 'Student 3' ]
// }

// Request page 2 explicitly
console.log(paginateRecords(students, 2));
// Output:
// {
//   currentPage: 2,
//   pageSize: 3,
//   totalRecords: 8,
//   totalPages: 3,
//   data: [ 'Student 4', 'Student 5', 'Student 6' ]
// }
```