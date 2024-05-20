//let: Block-scoped, allows reassignment but not redeclaration within the same scope.
//var: Function-scoped or globally-scoped, allows redeclaration and reassignment.
//const: Block-scoped, does not allow reassignment or redeclaration.


let city = 'New York';
console.log(city); // Output: New York

let temperature = 72;
console.log(temperature); // Output: 72

// let allows reassignment but not redeclaration in the same scope
city = 'Los Angeles';
console.log(city); // Output: Los Angeles

// Re-declaration with let in the same scope will cause an error
// let city = 'Chicago'; // SyntaxError: Identifier 'city' has already been declared


var name = 'Alice';
console.log(name); // Output: Alice

var age = 25;
console.log(age); // Output: 25

// var allows redeclaration and reassignment
var name = 'Bob';
console.log(name); // Output: Bob

age = 30;
console.log(age); // Output: 30



const country = 'USA';
console.log(country); // Output: USA

const pi = 3.14159;
console.log(pi); // Output: 3.14159

// const does not allow reassignment or redeclaration
// country = 'Canada'; // TypeError: Assignment to constant variable
// const pi = 3.14; // SyntaxError: Identifier 'pi' has already been declared
