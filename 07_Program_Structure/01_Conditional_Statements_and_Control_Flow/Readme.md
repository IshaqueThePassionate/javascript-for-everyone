# Conditions of Control Flow Statements in JavaScript

## Introduction

Control flow statements such as `if`, `while`, and `do-while` rely on conditions to determine whether a block of code should be executed. These conditions are typically boolean values, but JavaScript also accepts any truthy value.

## Boolean Conditions

In principle, the conditions in control flow statements should be boolean values (`true` or `false`). However, JavaScript will coerce other values to boolean as needed. This means any value that is not explicitly `false` or falsy will be treated as `true`.

### Example

The following two `if` statements are equivalent:
```javascript
if (value) {
  // Do something
}

if (Boolean(value) === true) {
  // Do something
}
```

## Falsy Values

A value is considered falsy if it is `false` when coerced to a boolean. Here is a list of all falsy values in JavaScript:
- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `''` (empty string)

### Example of Falsy Values

```javascript
let values = [undefined, null, false, 0, NaN, ''];
values.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

// Output:
// undefined is falsy
// null is falsy
// false is falsy
// 0 is falsy
// NaN is falsy
//  is falsy
```

## Truthy Values

Any value that is not falsy is considered truthy. This includes:
- Any non-zero number (positive or negative)
- Non-empty strings
- Objects
- Arrays
- Functions
- Symbols

### Example of Truthy Values

```javascript
let values = [1, -1, 'hello', {}, [], function() {}, Symbol('symbol')];
values.forEach(value => {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
});

// Output:
// 1 is truthy
// -1 is truthy
// hello is truthy
// [object Object] is truthy
//  is truthy
// function () {} is truthy
// Symbol(symbol) is truthy
```

## Using Conditions in Control Flow Statements

Control flow statements such as `if`, `while`, and `do-while` use these truthy and falsy evaluations to control the execution of code blocks.

### If Statement

```javascript
let value = 'hello';
if (value) {
  console.log('Value is truthy');
} else {
  console.log('Value is falsy');
}
// Output: Value is truthy
```

### While Statement

```javascript
let count = 3;
while (count) {
  console.log(count);
  count--;
}
// Output:
// 3
// 2
// 1
```

### Do-While Statement

```javascript
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
// Output:
// 0
// 1
// 2
```

## Conclusion

Understanding how JavaScript evaluates conditions in control flow statements is crucial for writing efficient and bug-free code. By recognizing which values are truthy and which are falsy, you can predict and control the flow of your programs more effectively.

For more information, see §16.2 “Falsy and truthy values”.

## Further Reading

- [MDN Web Docs: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript: The Good Parts by Douglas Crockford](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)


