
// typeof: Returns the type of a variable

let name = "John";
console.log(typeof name);  // Output: string


let age = 30;
console.log(typeof age);    // Output: number


let isActive = true;
console.log(typeof isActive); // Output: boolean


let nothing = null;
console.log(typeof nothing);  // Output: object (this is a known quirk in JavaScript)



// delete: Removes a property from an object

let person = { name: "Alice", age: 25 };
delete person.age;
console.log(person);  // Output: { name: "Alice" }


// void: Evaluates an expression and returns undefined

let result = void (5 + 5);
console.log(result);  // Output: undefined
