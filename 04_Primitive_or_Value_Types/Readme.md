# Understanding Primitive Values in JavaScript

## Introduction

Primitive values are the basic building blocks of data in JavaScript. They are atomic and cannot be divided into simpler values. In this guide, we will explore the characteristics of primitive values, how they are passed by value, and how they are compared.

## Primitive Values

Primitive values include:
- `Number` (e.g., `123`)
- `String` (e.g., `"abc"`)
- `Boolean` (e.g., `true` or `false`)
- `null`
- `undefined`
- `Symbol` (new in ECMAScript 6)
- `BigInt` (new in ECMAScript 2020)

### Characteristics of Primitive Values

#### 1. Primitives are Immutable

You cannot change, add, or remove properties of primitives. For example, trying to modify the length of a string will throw an error.

### Example:
```javascript
let str = 'abc';
console.log(str.length); // Output: 3

// Attempt to change the length property (will throw an error)
try {
  str.length = 1;
} catch (e) {
  console.error(e); // Output: TypeError: Cannot assign to read only property 'length'
}
```

#### 2. Primitives are Passed by Value

When primitive values are assigned to variables or passed to functions, their contents are copied. This means changes to the new variable or within the function do not affect the original value.

### Example:
```javascript
let x = 123;
let y = x; // y gets a copy of x's value

console.log(y); // Output: 123

y = 456; // Changing y does not affect x

console.log(x); // Output: 123
console.log(y); // Output: 456
```

### Example with Function:
```javascript
function modifyValue(val) {
  val = 999;
  console.log("Inside function: " + val); // Output: Inside function: 999
}

let num = 123;
modifyValue(num);
console.log("Outside function: " + num); // Output: Outside function: 123
```

#### 3. Primitives are Compared by Value

When comparing two primitive values, their actual contents are compared. If the contents are the same, they are considered equal.

### Example:
```javascript
console.log(123 === 123); // Output: true
console.log('abc' === 'abc'); // Output: true

// Comparison with boolean values
console.log(true === true); // Output: true
console.log(false === false); // Output: true

// Comparison with different values
console.log(123 === 456); // Output: false
console.log('abc' === 'def'); // Output: false
```

## Objects vs. Primitives

While primitive values and objects can both have properties and can be used in similar locations, they behave differently in key ways:

- **Primitives**: Immutable, passed by value, compared by value.
- **Objects**: Mutable, passed by reference, compared by reference.

### Example of Objects:
```javascript
let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 is a reference to obj1

console.log(obj2.name); // Output: Alice

obj2.name = 'Bob'; // Changing obj2 also changes obj1

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob

// Comparison of objects
let obj3 = { name: 'Alice' };
let obj4 = { name: 'Alice' };

console.log(obj1 === obj2); // Output: true (same reference)
console.log(obj3 === obj4); // Output: false (different references)
```

We will learn about reference types or objects in more depth in the objects section.



## Further Reading

- [MDN Web Docs: JavaScript Data Types and Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript: The Definitive Guide by David Flanagan](https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/)

