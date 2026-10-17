// ==========================================
// 1. Creating Arrays
// ==========================================

// Array Literal Syntax
let fruits = ['Apple', 'Banana', 'Mango'];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ['Hello', 42, true];

// Using the Array Constructor
let cars = new Array('Toyota', 'Honda', 'Ford');
let emptyArray = new Array(5); // Creates an empty array with 5 slots

//------------------------------------------

// ==========================================
// 2. Accessing Array Elements
// ==========================================

let fruitList = ['Apple', 'Banana', 'Mango'];

console.log(fruitList[0]); // Accessing the first element → Apple
console.log(fruitList[1]); // Accessing the second element → Banana
console.log(fruitList[2]); // Accessing the third element → Mango
console.log(fruitList[fruitList.length - 1]); // Accessing the last element using length property → Mango

//------------------------------------------

// ==========================================
// 3. Arrays are Mutable
// ==========================================

let mutableFruits = ['Apple', 'Banana', 'Mango'];
mutableFruits[0] = 'Orange'; // Directly modified the first element

console.log(mutableFruits); // ['Orange', 'Banana', 'Mango']

//------------------------------------------

// ==========================================
// 4. Basic Array Methods (push, pop, shift, unshift)
// ==========================================

let carBrands = ['Audi', 'BMW'];

// End operations
carBrands.push('Toyota');   // ['Audi', 'BMW', 'Toyota']
carBrands.pop();            // ['Audi', 'BMW']

// Start operations
carBrands.unshift('Ferrari'); // ['Ferrari', 'Audi', 'BMW']
carBrands.shift();            // ['Audi', 'BMW']

//------------------------------------------

// ==========================================
// 5. Searching Methods (indexOf & includes)
// ==========================================

let colors = ['red', 'green', 'blue'];

console.log(colors.indexOf('green'));  // 1
console.log(colors.indexOf('yellow')); // -1

console.log(colors.includes('blue'));   // true
console.log(colors.includes('yellow')); // false

//------------------------------------------

// ==========================================
// 6. Concatenation & Reverse
// ==========================================

let primary = ['red', 'yellow', 'blue'];
let secondary = ['orange', 'green', 'violet'];

// Concat
let allColors = primary.concat(secondary);
console.log(allColors); // ['red', 'yellow', 'blue', 'orange', 'green', 'violet']

// Reverse
primary.reverse();
console.log(primary); // ['blue', 'yellow', 'red']

//------------------------------------------

// ==========================================
// 7. Slice Method
// ==========================================

let sliceColors = ['red', 'yellow', 'blue', 'green', 'pink'];

console.log(sliceColors.slice(1, 3)); // ['yellow', 'blue']
console.log(sliceColors.slice(2));    // ['blue', 'green', 'pink']
console.log(sliceColors.slice(-2));   // ['green', 'pink']

//------------------------------------------

// ==========================================
// 8. Splice Method
// ==========================================

let spliceColors = ['red', 'yellow', 'blue', 'green'];

// Deleting elements
spliceColors.splice(1, 2); // Deletes 2 elements starting from index 1
console.log(spliceColors); // ['red', 'green']

// Inserting elements without deletion
spliceColors.splice(1, 0, 'orange', 'white');
console.log(spliceColors); // ['red', 'orange', 'white', 'green']

//------------------------------------------

// ==========================================
// 9. Sort in Arrays
// ==========================================

let days = ['Monday', 'Sunday', 'Wednesday', 'Tuesday'];
days.sort();
console.log(days); // ['Monday', 'Sunday', 'Tuesday', 'Wednesday']

let squares = [25, 16, 4, 9, 1];
squares.sort();
console.log(squares); // [1, 16, 25, 4, 9] (because it performs string comparison)

//------------------------------------------

// ==========================================
// 10. Array References
// ==========================================

let arr1 = [1, 2, 3];
let arr2 = arr1; // Both point to the exact same memory address

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (arr1 also changes!)

// console.log([1]===[1]);   // false (both have different memory references)
// console.log(arr1 === arr2); // true (both have the same reference)

//------------------------------------------

// ==========================================
// 11. Constant Arrays
// ==========================================

const constArr = [1, 2, 3];

constArr.push(4);      // Allowed (array can be modified)
console.log(constArr); // [1, 2, 3, 4]

// constArr = [5, 6, 7]; // TypeError: Assignment to constant variable

//------------------------------------------

// ==========================================
// 12. Accessing Elements in Nested Arrays
// ==========================================

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // → 1 (first element in the first array)
console.log(matrix[1][2]); // → 6 (third element in the second array)
console.log(matrix[2][1]); // → 8 (second element in the third array)