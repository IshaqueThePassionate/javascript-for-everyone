# Arrays or Datasets

A complete guide covering JavaScript arrays, how they work in memory, array mutability, common array methods, references, and nested arrays.

---

## Table of Contents
- [Introduction](#introduction)
- [Arrays in JavaScript](#arrays-in-javascript)
  - [Creating Arrays](#creating-arrays)
  - [Accessing Array Elements](#accessing-array-elements)
  - [Visualizing Arrays](#visualizing-arrays)
- [Properties](#properties)
- [Arrays are Mutable](#arrays-are-mutable)
- [Basic Array Methods (Push, Pop, Shift, Unshift)](#basic-array-methods-push-pop-shift-unshift)
- [Searching Methods: indexOf & includes](#searching-methods-indexof--includes)
- [Concatenation & Reverse](#concatenation--reverse)
- [Slice Method](#slice-method)
- [Splice Method](#splice-method)
- [Sort in Arrays](#sort-in-arrays)
- [Array References](#array-references)
- [Constant Arrays](#constant-arrays)
- [Accessing Elements in Nested Arrays](#accessing-elements-in-nested-arrays)

---

### Introduction

To work with a chunk of digital data, we need a way to represent it in our machine’s memory. For example, to represent a collection of numbers like 2, 3, 5, 7, and 11, we could use strings, but that would be awkward and inefficient. Instead, JavaScript provides a data type specifically for storing sequences of values called an array.

---

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

#### Visualizing Arrays
Arrays are stored in memory in a linear format with continuous index positions:

```text
Indices:     0         1          2
Values:  ['Apple', 'Banana',  'Mango']
Length:   3
```

---

### Properties

JavaScript values often have properties. For example, `myString.length` gets the length of a string, and `Math.max` accesses the maximum function in the Math object. Properties can be accessed using a dot (`.`) or square brackets (`[]`).

- **Dot notation**: `value.x` fetches the property named "x".
- **Bracket notation**: `value[x]` fetches the property using the value of `x`.

If a property name is not a valid identifier (e.g., it starts with a number or contains spaces), use bracket notation: `value["property name"]`.

---

### Arrays are Mutable
Unlike strings, **arrays in JavaScript are mutable**. This means that elements inside an array can be directly changed, added, or removed without creating a new array.

```javascript
let fruits = ['Apple', 'Banana', 'Mango'];
fruits[0] = 'Orange'; // Directly modified the first element

console.log(fruits); // ['Orange', 'Banana', 'Mango']
```

---

### Basic Array Methods (Push, Pop, Shift, Unshift)

These basic methods modify the original values of the array:

- **`push()`**: Adds an element to the end of the array.
- **`pop()`**: Deletes an element from the end of the array and returns it.
- **`unshift()`**: Adds an element to the beginning of the array.
- **`shift()`**: Deletes an element from the beginning of the array and returns it.

```javascript
let cars = ['Audi', 'BMW'];

// End operations
cars.push('Toyota');   // ['Audi', 'BMW', 'Toyota']
cars.pop();            // ['Audi', 'BMW']

// Start operations
cars.unshift('Ferrari'); // ['Ferrari', 'Audi', 'BMW']
cars.shift();            // ['Audi', 'BMW']
```

---

### Searching Methods: indexOf & includes

- **`indexOf(value)`**: Returns the first index of the element. If not found, it returns `-1`.
- **`includes(value)`**: Checks whether the value exists in the array or not (returns `true` or `false`).

```javascript
let colors = ['red', 'green', 'blue'];

console.log(colors.indexOf('green')); // 1
console.log(colors.indexOf('yellow')); // -1

console.log(colors.includes('blue'));  // true
console.log(colors.includes('yellow')); // false
```

---

### Concatenation & Reverse

- **`concat()`**: Merges two or more arrays and returns a new array.
- **`reverse()`**: Reverses the order of the elements in the original array.

```javascript
let primary = ['red', 'yellow', 'blue'];
let secondary = ['orange', 'green', 'violet'];

// Concat
let allColors = primary.concat(secondary);
console.log(allColors); // ['red', 'yellow', 'blue', 'orange', 'green', 'violet']

// Reverse
primary.reverse();
console.log(primary); // ['blue', 'yellow', 'red']
```

---

### Slice Method
Copies a specific portion of an array and returns a new array. The original array is not modified.
- **Syntax:** `arr.slice(start, end)` (`end` index is not included).

```javascript
let colors = ['red', 'yellow', 'blue', 'green', 'pink'];

console.log(colors.slice(1, 3)); // ['yellow', 'blue']
console.log(colors.slice(2));    // ['blue', 'green', 'pink']
console.log(colors.slice(-2));   // ['green', 'pink']
```

---

### Splice Method
Deletes, replaces, or adds elements inside the original array (this modifies the original array).
- **Syntax:** `arr.splice(startIndex, deleteCount, item1, item2, ...)`

```javascript
let colors = ['red', 'yellow', 'blue', 'green'];

// Deleting elements
colors.splice(1, 2); // Deletes 2 elements starting from index 1
console.log(colors); // ['red', 'green']

// Inserting elements without deletion
colors.splice(1, 0, 'orange', 'white');
console.log(colors); // ['red', 'orange', 'white', 'green']
```

---

### Sort in Arrays
Sorts the elements of an array. By default, it converts elements to strings and sorts them alphabetically.

```javascript
let days = ['Monday', 'Sunday', 'Wednesday', 'Tuesday'];
days.sort();
console.log(days); // ['Monday', 'Sunday', 'Tuesday', 'Wednesday']

let squares = [25, 16, 4, 9, 1];
squares.sort();
console.log(squares); // [1, 16, 25, 4, 9] (because it performs string comparison)
```

---

### Array References
In JavaScript, arrays are reference types. The variable does not store the array data directly; instead, it stores the memory address (reference).

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // Both point to the exact same memory address

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (arr1 also changes!)

console.log([1] === [1]); // false (both have different memory references)
console.log(arr1 === arr2); // true (both have the same reference)
```

---

### Constant Arrays
When we declare an array with `const`, it means we cannot reassign that variable to another array or value, but the elements inside that array can still be added, removed, or modified.

```javascript
const arr = [1, 2, 3];

arr.push(4); // Allowed (array can be modified)
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6, 7]; // TypeError: Assignment to constant variable
```

---

### Accessing Elements in Nested Arrays

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