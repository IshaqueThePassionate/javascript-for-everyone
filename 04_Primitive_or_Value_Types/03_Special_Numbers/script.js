// Infinity Examples

let positiveInfinity = 1 / 0;
console.log(positiveInfinity);  // Output: Infinity


let largeNumber = Number.MAX_VALUE * 2;
console.log(largeNumber);  // Output: Infinity



// -Infinity Examples

let negativeInfinity = -1 / 0;
console.log(negativeInfinity);  // Output: -Infinity



// NaN Examples

let invalidOperation = "hello" / 2;
console.log(invalidOperation);  // Output: NaN


let invalidMath = Math.sqrt(-1);
console.log(invalidMath);  // Output: NaN


console.log(NaN === NaN);  // Output: false


// Comparison Examples with Infinity


console.log(Infinity > 1000000);  // Output: true
console.log(-Infinity < -1000000);  // Output: true
