# JavaScript Objects

In JavaScript, an object is a collection of key-value pairs where each key is a unique identifier and each value is a data or function reference. Objects are used to store and organize data in a structured manner. Here's how you can define and use objects in JavaScript:

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

## Real-Life Object Example: Book

Now, let's define an object representing a book with properties like title, author, pages, and genre.

```javascript
let book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    genre: 'Fiction',
};
```

### Accessing Book Properties

You can access and display information about the book using dot or bracket notation.

```javascript
console.log(book.title);  // Output: The Great Gatsby
console.log(book['author']); // Output: F. Scott Fitzgerald
```

### Modifying Book Properties

You can update the book's properties as needed.

```javascript
book.pages = 200;
book.genre = 'Classic Fiction';

console.log(book.pages); // Output: 200
console.log(book.genre); // Output: Classic Fiction
```

Objects in JavaScript allow you to model real-world entities and store related data and functionality in a single container. They are versatile and powerful constructs that are fundamental to JavaScript programming.
