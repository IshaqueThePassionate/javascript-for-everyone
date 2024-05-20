# JavaScript Primitives

In JavaScript, primitives (also called primitive data types) are the most basic data types that are not objects and have no methods. JavaScript has six primitive data types: `string`, `number`, `boolean`, `null`, `undefined`,Each of these primitives represents a single value.

## 1. String

A `string` represents textual data and is enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
let firstName = 'Alice';
let lastName = "Smith";
let greeting = `Hello, ${firstName} ${lastName}!`;

console.log(firstName); // Output: Alice
console.log(lastName);  // Output: Smith
console.log(greeting);  // Output: Hello, Alice Smith!
```

## 2. Number

A `number` represents both integer and floating-point numbers. JavaScript does not distinguish between integer and floating-point numbers.

```javascript
let integer = 42;
let float = 3.14;

console.log(integer); // Output: 42
console.log(float);   // Output: 3.14
```

## 3. Boolean

A `boolean` represents a logical entity and can have only two values: `true` or `false`.

```javascript
let isJavaScriptFun = true;
let isHomeworkDone = false;

console.log(isJavaScriptFun); // Output: true
console.log(isHomeworkDone);  // Output: false
```

## 4. Null

`null` represents the intentional absence of any object value. It is one of JavaScript's primitive values.

```javascript
let emptyValue = null;

console.log(emptyValue); // Output: null
```

## 5. Undefined

`undefined` indicates that a variable has been declared but has not yet been assigned a value.

```javascript
let notAssigned;

console.log(notAssigned); // Output: undefined
```

## 6. Symbol

A `symbol` is a unique and immutable primitive value that can be used as the key of an object property. Symbols are created using the `Symbol()` function.

```javascript
let uniqueId = Symbol('id');

console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol
```

## 7. BigInt

`bigint` is a primitive type used to represent integers with arbitrary precision. It is created by appending `n` to the end of an integer or using the `BigInt` constructor.

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigNumber = BigInt("1234567890123456789012345678901234567890");

console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(anotherBigNumber); // Output: 1234567890123456789012345678901234567890n
```

## Summary

- **String**: Textual data, e.g., `'Hello'`, `"World"`.
- **Number**: Numeric data, e.g., `42`, `3.14`.
- **Boolean**: Logical data, `true` or `false`.
- **Null**: Intentional absence of any value, `null`.
- **Undefined**: Variable that has been declared but not assigned a value, `undefined`.

Understanding these primitive types is fundamental to working effectively with JavaScript, as they form the building blocks for more complex data structures and operations.