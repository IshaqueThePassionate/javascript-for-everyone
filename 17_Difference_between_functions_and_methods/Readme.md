### Understanding Functions and Methods in JavaScript

### What is a Function?

A **function** in JavaScript is a reusable block of code that performs a specific task. Functions are defined using the `function` keyword or as arrow functions (`=>`) and can exist independently, meaning they are not tied to any object or class.

#### Characteristics of Functions:
- Standalone and do not belong to any object or class.
- Can be called directly by their name or through a module prefix.
- Do not have access to properties of objects unless explicitly passed.

---

### What is a Method?

A **method** in JavaScript is a function that is associated with an **object** or **class**. Methods are defined as properties of an object or within a class and can operate on the data of that object or class.

#### Characteristics of Methods:
- Associated with an object or class.
- Can access and modify properties of the object they belong to using `this`.
- Operate on the data specific to the object they are called on.

---

### Key Differences Between Function and Method

| Feature                | Function                         | Method                         |
|-------------------------|-----------------------------------|--------------------------------|
| **Belongs to**          | Independent                     | Associated with an object/class|
| **Call**               | `functionName()`                | `object.methodName()`         |
| **Access to Data**      | Cannot access object properties  | Can access object properties  |
| **Defined Inside**      | Outside of an object or class    | Inside an object or class     |

---

### Code Examples

#### Example of a Function:
```javascript
function add(a, b) {
    return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5
```

This is a standalone function, not tied to any object or class.

#### Example of a Method:
```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();
const result = calc.add(2, 3);
console.log(result); // Output: 5
```

Here, `add` is a method because it is defined inside the `Calculator` class and is called on an object of that class.

---

### Additional Notes

- Every method is technically a function in JavaScript since methods are functions defined as properties.
- However, not every function is a method, as standalone functions exist independently of objects or classes.

---