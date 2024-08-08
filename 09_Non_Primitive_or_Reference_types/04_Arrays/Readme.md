# Arrays or Datasets

### Introduction

To work with a chunk of digital data, we need a way to represent it in our machine’s memory. For example, to represent a collection of numbers like 2, 3, 5, 7, and 11, we could use strings, but that would be awkward and inefficient. Instead, JavaScript provides a data type specifically for storing sequences of values called an array.

### Arrays in JavaScript

An array in JavaScript is written as a list of values between square brackets, separated by commas. Arrays are a fundamental way to group related values together, making it easier to manage and manipulate data. To access the elements inside an array, we use square brackets. The first index of an array is zero, so the first element is retrieved with `listOfNumbers[0]`.

#### Creating Arrays

Arrays can be created in several ways:

1. **Array Literal Syntax**:

   ```javascript
   let fruits = ['Apple', 'Banana', 'Mango'];
   let numbers = [1, 2, 3, 4, 5];
   let mixedArray = ['Hello', 42, true];
   ```

   - `fruits` is an array containing strings.
   - `numbers` is an array containing numbers.
   - `mixedArray` is an array containing different data types.

2. **Using the `Array` Constructor**:

   ```javascript
   let cars = new Array('Toyota', 'Honda', 'Ford');
   let emptyArray = new Array(5); // Creates an empty array with 5 slots
   ```

   - `cars` is an array created using the `Array` constructor.
   - `emptyArray` creates an array with a specified length, but it's empty initially.

#### Accessing Array Elements

To access elements in an array, you use their index positions, starting with 0 for the first element:

```javascript
let fruits = ['Apple', 'Banana', 'Mango'];

console.log(fruits[0]); // Accessing the first element → Apple
console.log(fruits[1]); // Accessing the second element → Banana
console.log(fruits[2]); // Accessing the third element → Mango
console.log(fruits[fruits.length - 1]); // Accessing the last element using length property → Mango
```

#### Accessing Elements in Nested Arrays

You can also have arrays within arrays (multi-dimensional arrays), and access them using multiple indexes:

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // → 1 (first element in the first array)
console.log(matrix[1][2]); // → 6 (third element in the second array)
console.log(matrix[2][1]); // → 8 (second element in the third array)
```

### Properties

JavaScript values often have properties. For example, `myString.length` gets the length of a string, and `Math.max` accesses the maximum function in the Math object. Properties can be accessed using a dot (`.`) or square brackets (`[]`).

- **Dot notation**: `value.x` fetches the property named "x".
- **Bracket notation**: `value[x]` fetches the property using the value of `x`.

If a property name is not a valid identifier (e.g., it starts with a number or contains spaces), use bracket notation: `value["property name"]`.

