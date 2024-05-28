// Push

// let fruits = ["Apple", "Banana", "Cherry"];
// let newLength = fruits.push("Date");

// console.log(fruits);      // Output: ["Apple", "Banana", "Cherry", "Date"]
// console.log(newLength);   // Output: 4

//-------------------------------------------------------------------------------------------------------


// // Unshift

// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// let newLength = fruits.unshift("Elderberry");

// console.log(fruits);      // Output: ["Elderberry", "Apple", "Banana", "Cherry", "Date"]
// console.log(newLength);   // Output: 5

//-------------------------------------------------------------------------------------------------------


//  // Splice


// let fruits = ["Elderberry", "Apple", "Banana", "Cherry", "Date"];
// fruits.splice(2, 0, "Fig");

// console.log(fruits); // Output: ["Elderberry", "Apple", "Fig", "Banana", "Cherry", "Date"]

//-------------------------------------------------------------------------------------------------------


// // Removing Elements


//  // You can remove elements using methods such as `pop`, `shift`, and `splice`.


// // pop

// let fruits = ["Elderberry", "Apple", "Fig", "Banana", "Cherry", "Date"];
// let lastElement = fruits.pop();

// console.log(fruits);      // Output: ["Elderberry", "Apple", "Fig", "Banana", "Cherry"]
// console.log(lastElement); // Output: "Date"

//-------------------------------------------------------------------------------------------------------


// // shift


// let fruits = ["Elderberry", "Apple", "Fig", "Banana", "Cherry"];
// let firstElement = fruits.shift();

// console.log(fruits);      // Output: ["Apple", "Fig", "Banana", "Cherry"]
// console.log(firstElement); // Output: "Elderberry"

//-------------------------------------------------------------------------------------------------------



// // Splice


// let fruits = ["Apple", "Fig", "Banana", "Cherry"];
// let removedElements = fruits.splice(1, 1);

// console.log(fruits);          // Output: ["Apple", "Banana", "Cherry"]
// console.log(removedElements); // Output: ["Fig"]

//-------------------------------------------------------------------------------------------------------


// //Array Methods

// // JavaScript arrays have many built-in methods for various operations. Here are some commonly used ones:

// // forEach


// let fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach(fruit => console.log(fruit));  

// // Output: 

// // Apple
// // Banana
// // Cherry

//-------------------------------------------------------------------------------------------------------


// // map


// let numbers = [1, 2, 3, 4, 5];

// // Using map to double each number
// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// // You can also use the `length` property with `map` method to get the new array containing the lengths of strings in the original array.


// let fruits = ["Apple", "Banana", "Cherry"];

// const lengths = fruits.map(fruit => fruit.length);

// console.log(lengths);

//-------------------------------------------------------------------------------------------------------


// // filter

// let fruits = ["Apple", "Banana", "Cherry", "Date"];

// const longFruits = fruits.filter(fruit => fruit.length > 5);

// console.log(longFruits); // Output: ["Banana", "Cherry"]

//-------------------------------------------------------------------------------------------------------


// // reduce

// let fruits = ["Apple", "Banana", "Cherry", "Date"];

// const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

// console.log(totalLength); // Output: 17

//-------------------------------------------------------------------------------------------------------


// // find

// const fruits = ["Apple", "Banana", "Cherry", "Date"];

// const foundFruit = fruits.find(fruit => fruit.startsWith("B"));

// console.log(foundFruit); // Output: Banana

