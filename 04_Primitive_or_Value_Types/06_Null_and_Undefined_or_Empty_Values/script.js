
// Null Example

let nullValue = null;
console.log(nullValue);  // Output: null



// Undefined Example

let undefinedValue;
console.log(undefinedValue);  // Output: undefined



// Empty String

let emptyString = "";
console.log(emptyString);  // Output: (empty string)



// Checking for Null

if (nullValue === null) {
  console.log("This is null");  // Output: This is null
}


// Checking for Undefined

if (undefinedValue === undefined) {
  console.log("This is undefined");  // Output: This is undefined
}


// Checking for Empty String

if (emptyString === "") {
  console.log("This is an empty string");  // Output: This is an empty string
}


// Difference between null and undefined

let x = null;
let y;
console.log(x === y);  // Output: false
console.log(x == y);   // Output: true (both are considered "empty" values)
