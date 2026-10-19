# JavaScript Objects

A comprehensive reference guide covering JavaScript objects, property access, dynamic manipulation, built-in object utilities, arrays as objects, and common practical design patterns.

---

## Table of Contents
- [Introduction](#introduction)
- [Key Characteristics of Objects](#key-characteristics-of-objects)
- [Object Declaration](#object-declaration)
- [Accessing Object Properties](#accessing-object-properties)
- [Adding and Modifying Properties](#adding-and-modifying-properties)
- [Real-Life Object Example: Car](#real-life-object-example-car)
  - [Accessing Car Properties](#accessing-car-properties)
  - [Modifying Car Properties](#modifying-car-properties)
- [Property Names](#property-names)
- [Braces in JavaScript](#braces-in-javascript)
- [Arrow Functions and Objects](#arrow-functions-and-objects)
  - [Detailed Example: Arrow Functions and Objects](#detailed-example-arrow-functions-and-objects)
- [Undefined Properties](#undefined-properties)
- [Assigning Values and Deleting Properties](#assigning-values-and-deleting-properties)
- [Checking Property Existence](#checking-property-existence)
- [Listing Object Properties](#listing-object-properties)
- [Copying Properties](#copying-properties)
- [Arrays as Objects](#arrays-as-objects)
  - [Array of Objects: Example 1 (Student Directory)](#array-of-objects-example-1-student-directory)
  - [Array of Objects: Example 2 (Shopping Cart)](#array-of-objects-example-2-shopping-cart)
  - [Array of Objects: Example 3 (Todo Task List)](#array-of-objects-example-3-todo-task-list)
- [Journal Example: Array of Complex Objects](#journal-example-array-of-complex-objects)
  - [Accessing Data in the Journal](#accessing-data-in-the-journal)
- [Adding Properties Using the Spread Operator](#adding-properties-using-the-spread-operator)
- [Conclusion](#conclusion)

---

## Introduction

In JavaScript, an object is a collection of key-value pairs where each key is a unique identifier and each value is a data or function reference. Objects are used to store and organize data in a structured manner.

Objects in JavaScript are complex data structures that allow you to store collections of data and more complex entities. They are fundamental building blocks in JavaScript, enabling you to represent real-world entities, group related data, and define behavior through methods.

---

## Key Characteristics of Objects

1. **Key-Value Pairs**: Objects store data in the form of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, arrays, or functions.
2. **Dynamic Nature**: Objects are dynamic, meaning that properties can be added, modified, or deleted after the object has been created.
3. **Reference Type**: Objects are reference types, which means that when you assign an object to a variable or pass it to a function, you are dealing with a reference to the object, not an independent copy of the object.

---

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

---

## Accessing Object Properties

You can access object properties using dot notation (`object.property`) or bracket notation (`object['property']`).

```javascript
console.log(person.firstName);   // Output: John
console.log(person['lastName']); // Output: Doe
```

---

## Adding and Modifying Properties

You can add new properties or modify existing ones by assigning values to them.

```javascript
person.gender = 'Male';
person.age = 35;

console.log(person.gender); // Output: Male
console.log(person.age);    // Output: 35
```

---

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

You can access and display information about the car using dot or bracket notation:

```javascript
console.log(car.make);     // Output: Toyota
console.log(car['model']); // Output: Camry
```

### Modifying Car Properties

You can update the car's properties as needed:

```javascript
car.year = 2023;
car.color = 'Blue';

console.log(car.year);  // Output: 2023
console.log(car.color); // Output: Blue
```

---

## Property Names

Property names that are not valid identifiers (such as names with spaces, special characters, or starting with digits) must be quoted:

```javascript
let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

console.log(descriptions["touched tree"]); // Output: Touched a tree
```

---

## Braces in JavaScript

Braces `{}` serve two distinct roles in JavaScript syntax:
1. They define a block of statements (in functions, `if` statements, loops).
2. They define an object literal when used in an expression context.

```javascript
// 1. Using braces to start a block of statements
if (true) {
    console.log("This is a block of statements.");
}

// 2. Using braces to define an object
let person = { name: "Ahmed", age: 25 };
console.log(person); // Output: { name: "Ahmed", age: 25 }
```

---

## Arrow Functions and Objects

To return an object directly from a shorthand arrow function without using a formal `return` statement, wrap the object literal in parentheses `()`.

```javascript
let createPerson = name => ({ name: name, city: "Karachi" });
console.log(createPerson("Ayesha")); // Output: { name: "Ayesha", city: "Karachi" }
```

### Detailed Example: Arrow Functions and Objects

When using arrow functions to return an object literal, parentheses are required to disambiguate the syntax:

1. **Arrow Function without Parentheses:**  
   If you write `name => { name: name }`, JavaScript parses the braces `{}` as the function body block instead of an object literal, leading to syntax errors or an unexpected return of `undefined`.
2. **Arrow Function with Parentheses:**  
   By wrapping the object inside `({ ... })`, JavaScript evaluates the braces as an object expression rather than a code block:

```javascript
let createPerson = name => ({ name: name, profession: "Engineer" });
console.log(createPerson("Ali")); // Output: { name: "Ali", profession: "Engineer" }
```

---

## Undefined Properties

Attempting to access a property that has not been defined on an object returns `undefined` rather than throwing an error:

```javascript
let person = { name: "Sara", age: 30 };
console.log(person.city); // Output: undefined
```

---

## Assigning Values and Deleting Properties

You can dynamically add new properties, update existing ones, or remove properties permanently using the `delete` operator:

```javascript
let car = { make: "Toyota", model: "Corolla" };
console.log(car.make); // Output: Toyota

// Add a property
car.color = "Red";
console.log(car.color); // Output: Red

// Delete a property
delete car.model;
console.log(car.model); // Output: undefined
```

---

## Checking Property Existence

The `in` operator verifies whether a specified property key exists within an object (returns `true` or `false`):

```javascript
let house = { rooms: 3, garden: true };
console.log("rooms" in house);  // Output: true
console.log("garage" in house); // Output: false
```

---

## Listing Object Properties

Use the static method `Object.keys()` to extract an array containing all enumerable property names (keys) of an object:

```javascript
let smartphone = { brand: "Samsung", model: "Galaxy S21", color: "Black" };
console.log(Object.keys(smartphone)); // Output: ["brand", "model", "color"]
```

---

## Copying Properties

`Object.assign()` copies all enumerable own properties from one or more source objects to a target object:

```javascript
let personA = { name: "Bilal", age: 28 };
Object.assign(personA, { age: 29, city: "Lahore" });
console.log(personA); // Output: { name: "Bilal", age: 29, city: "Lahore" }
```

---

## Arrays as Objects

In JavaScript, arrays are technically specialized objects designed for holding ordered, indexed lists. Running `typeof` on an array confirms its underlying object nature:

```javascript
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // Output: "object"
```

Because arrays are objects, you can create collections of structured items known as an **Array of Objects**.

### Array of Objects: Example 1 (Student Directory)

A collection where each array element is an object representing a student:

```javascript
let students = [
    { id: 101, name: "Ishaque", city: "Jacobabad" },
    { id: 102, name: "Hamza", city: "Karachi" },
    { id: 103, name: "Zubair", city: "Sukkur" }
];

// Accessing the second student's name
console.log(students[1].name); // Output: Hamza

// Iterating over the array of objects
for (let student of students) {
    console.log(`Student ID: ${student.id}, Name: ${student.name}`);
}
```

### Array of Objects: Example 2 (Shopping Cart)

A collection representing items in an e-commerce checkout list:

```javascript
let cart = [
    { item: "Laptop", price: 85000, qty: 1 },
    { item: "Mouse", price: 1500, qty: 2 },
    { item: "Keyboard", price: 3500, qty: 1 }
];

// Calculating the total checkout price
let grandTotal = 0;
for (let product of cart) {
    grandTotal += product.price * product.qty;
}

console.log(`Total Bill: Rs ${grandTotal}`); // Output: Total Bill: Rs 91500
```

### Array of Objects: Example 3 (Todo Task List)

A task tracker managing state using objects with boolean status properties:

```javascript
let todoList = [
    { id: 1, task: "Practice JavaScript", isCompleted: true },
    { id: 2, task: "Review Git commands", isCompleted: true },
    { id: 3, task: "Build Todo Project", isCompleted: false }
];

// Marking the third task as completed
todoList[2].isCompleted = true;

// Printing only pending tasks
for (let item of todoList) {
    if (!item.isCompleted) {
        console.log(`Pending: ${item.task}`);
    }
}
```

---

## Journal Example: Array of Complex Objects

A daily event log structured as an array of objects where each entry contains both primitive values and nested arrays:

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
];
```

### Accessing Data in the Journal

Access individual logs using array indexing, then query object fields via dot notation:

#### Accessing the First Entry
```javascript
let firstEntry = journal[0];
console.log(firstEntry);
// Output: { events: ["work", "touched tree", "biryani", "running", "television"], squirrel: false }
```

#### Accessing Events of the First Entry
```javascript
let firstEntryEvents = journal[0].events;
console.log(firstEntryEvents);
// Output: ["work", "touched tree", "biryani", "running", "television"]
```

#### Checking if Ahmed was a Squirrel in the First Entry
```javascript
let wasSquirrelFirstEntry = journal[0].squirrel;
console.log(wasSquirrelFirstEntry); // Output: false
```

---

## Adding Properties Using the Spread Operator

The object spread operator (`...`) creates a shallow copy of an existing object's properties, enabling you to add or overwrite fields immutably without altering the original structure directly:

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
// Output: { name: "Hassan", age: 21, city: "Karachi" }
```

### Mechanics:
1. **Empty Object Initialization:** `let student = {};` allocates a clean object.
2. **Spread Expansion:** `...student` unpacks all existing key-value pairs (if any).
3. **Property Extension:** Any keys provided after `...student` are merged into the newly formed object reference.

---

## Conclusion

Objects are the primary way to organize structured, related data in JavaScript. Whether used as single dictionary records, combined with arrays to manage multi-record lists, or combined with functional operators like the spread operator and `Object.assign()`, mastering object properties and references provides the tools needed for real-world application state management.