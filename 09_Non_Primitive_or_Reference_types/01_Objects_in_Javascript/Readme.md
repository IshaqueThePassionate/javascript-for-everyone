# JavaScript Objects


In JavaScript, an object is a collection of key-value pairs where each key is a unique identifier and each value is a data or function reference. Objects are used to store and organize data in a structured manner. 

Objects in JavaScript are complex data structures that allow you to store collections of data and more complex entities. They are fundamental building blocks in JavaScript, enabling you to represent real-world entities, group related data, and define behavior through methods.


### Key Characteristics of Objects in JavaScript:

1. **Key-Value Pairs**: Objects store data in the form of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, arrays, or functions.

2. **Dynamic Nature**: Objects are dynamic, meaning that properties can be added, modified, or deleted after the object has been created.

3. **Reference Type**: Objects are reference types, which means that when you assign an object to a variable or pass it to a function, you are dealing with a reference to the object, not a copy of the object.

Here's how you can define and use objects in JavaScript:

## Object Declaration

You can create an object using object literal notation `{}`, which contains a comma-separated list of key-value pairs enclosed within curly braces.

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
};
```

## Accessing Object Properties

You can access object properties using dot notation (`object.property`) or bracket notation (`object['property']`).

```javascript
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe
```

## Adding and Modifying Properties

You can add new properties or modify existing ones by assigning values to them.

```javascript
person.gender = 'Male';
person.age = 35;

console.log(person.gender); // Output: Male
console.log(person.age);    // Output: 35
```

## Real-Life Object Example: Car

Let's define an object representing a car with various properties like make, model, year, and color.

```javascript
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
};
```

### Accessing Car Properties

You can access and display information about the car using dot or bracket notation.

```javascript
console.log(car.make);  // Output: Toyota
console.log(car['model']); // Output: Camry
```

### Modifying Car Properties

You can update the car's properties as needed.

```javascript
car.year = 2023;
car.color = 'Blue';

console.log(car.year);  // Output: 2023
console.log(car.color); // Output: Blue
```

## Property Names
Property names that aren't valid identifiers must be quoted.

```javascript
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

console.log(descriptions["touched tree"]); // → "Touched a tree"
```

## Braces in JavaScript
Braces `{}` have two meanings in JavaScript:
1. They start a block of statements.
2. They define an object when used in other positions.

Example:
```javascript
// Using braces to start a block of statements
if (true) {
  console.log("This is a block of statements.");
}

// Using braces to define an object
let person = { name: "Ahmed", age: 25 };
console.log(person); // → { name: "Ahmed", age: 25 }
```

## Arrow Functions and Objects
To return an object from a short-hand arrow function, use parentheses around the object.

```javascript
let createPerson = name => ({ name: name, city: "Karachi" });
console.log(createPerson("Ayesha")); // → { name: "Ayesha", city: "Karachi" }
```

### Detailed Example: Arrow Functions and Objects
When using arrow functions to return an object, you need to wrap the object in parentheses to avoid confusion with the function body. Here’s a step-by-step explanation:

1. **Arrow Function without Parentheses:**
   If you write `name => { name: name }`, JavaScript interprets the braces `{}` as the function body. It expects statements inside these braces, not an object.

2. **Arrow Function with Parentheses:**
   By wrapping the object in parentheses, you tell JavaScript that `{ name: name }` is an expression that returns an object, not a function body.

   ```javascript
   let createPerson = name => ({ name: name, profession: "Engineer" });
   console.log(createPerson("Ali")); // → { name: "Ali", profession: "Engineer" }
   ```

## Undefined Properties
Accessing a property that doesn't exist returns `undefined`.

```javascript
let person = { name: "Sara", age: 30 };
console.log(person.city); // → undefined
```

## Assigning Values to Properties
You can assign values to properties, creating new properties if they don't exist.

```javascript
let car = { make: "Toyota", model: "Corolla" };
console.log(car.make); // → Toyota
car.color = "Red";
console.log(car.color); // → Red

delete car.model;
console.log(car.model); // → undefined
```

## Checking Property Existence
The `in` operator checks if an object has a specific property.

```javascript
let house = { rooms: 3, garden: true };
console.log("rooms" in house); // → true
console.log("garage" in house); // → false
```

## Listing Object Properties
Use `Object.keys` to get an array of an object's property names.

```javascript
let smartphone = { brand: "Samsung", model: "Galaxy S21", color: "Black" };
console.log(Object.keys(smartphone)); // → ["brand", "model", "color"]
```

## Copying Properties
`Object.assign` copies properties from one object to another.

```javascript
let personA = { name: "Bilal", age: 28 };
Object.assign(personA, { age: 29, city: "Lahore" });
console.log(personA); // → { name: "Bilal", age: 29, city: "Lahore" }
```

## Arrays as Objects
Arrays are a type of object specialized for storing sequences of things. Use `typeof []` to confirm it returns "object".

```javascript
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // → "object"
```

## Example: Ahmed's Journal
Ahmed keeps a journal as an array of objects, where each object represents a day's log.

```javascript
let journal = [
  {
    events: ["work", "touched tree", "biryani", "running", "television"],
    squirrel: false
  },
  {
    events: ["work", "ice cream", "daal chawal", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "tea"],
    squirrel: true
  }
  // and so on...
];
```

### Accessing Data in the Journal
To access data in the `journal` array, you can use array indexing and then access object properties using dot notation or bracket notation.

#### Example: Accessing the First Entry
To access the first entry in the journal:

```javascript
let firstEntry = journal[0];
console.log(firstEntry);
// → { events: ["work", "touched tree", "biryani", "running", "television"], squirrel: false }
```

#### Example: Accessing Events of the First Entry
To access the `events` of the first entry:

```javascript
let firstEntryEvents = journal[0].events;
console.log(firstEntryEvents);
// → ["work", "touched tree", "biryani", "running", "television"]
```

#### Example: Checking if Ahmed was a Squirrel in the First Entry
To check if Ahmed turned into a squirrel in the first entry:

```javascript
let wasSquirrelFirstEntry = journal[0].squirrel;
console.log(wasSquirrelFirstEntry); // → false
```
<br>

# Adding Properties to an Empty Object Using the Spread Operator

The spread operator (`...`) in JavaScript can be used to create a new object by copying properties from an existing object or by adding new properties to an empty object. This is a clean and concise way to build objects.

### Example: Adding Properties to an Empty Object with the Spread Operator

```javascript
let student = {};

// Adding properties using the spread operator
student = {
  ...student,
  name: "Hassan",
  age: 21,
  city: "Karachi"
};

console.log(student);
// → { name: "Hassan", age: 21, city: "Karachi" }
```

### Explanation:

1. **Creating an Empty Object:**
   We start by creating an empty object using `{}`.

   ```javascript
   let student = {};
   ```

2. **Using the Spread Operator:**
   We can then use the spread operator to copy the existing properties (if any) and add new ones at the same time.

   ```javascript
   student = {
     ...student, // This copies existing properties (if any)
     name: "Hassan",
     age: 21,
     city: "Karachi"
   };
   ```

   In this case, since `student` is initially an empty object, the spread operator doesn't copy any existing properties, but it allows us to add new properties in a clean and concise way.

3. **Result:**
   After using the spread operator, the `student` object now contains the properties we added.

   ```javascript
   console.log(student);
   // → { name: "Hassan", age: 21, city: "Karachi" }
   ```
