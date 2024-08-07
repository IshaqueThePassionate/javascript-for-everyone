

# Advanced Object Concepts in JavaScript

This section covers advanced concepts related to objects in JavaScript. These topics will help you understand how to work with objects more effectively, providing various techniques to manage and manipulate data.

### 1. Object Destructuring
   - Object destructuring is a concise way to extract values from an object into individual variables.

   ```javascript
   const student = { name: "Hassan", age: 21, city: "Karachi" };
   const { name, age } = student;

   console.log(name); // → Hassan
   console.log(age);  // → 21
   ```

### Destructuring with Default Values

```javascript
const student = {
  name: "Hassan",
  age: 21
};

const { name, city = "Unknown" } = student;

console.log(name); // → Hassan
console.log(city); // → Unknown
```

### Renaming Variables During Destructuring

```javascript
const student = {
  name: "Hassan",
  age: 21,
  city: "Karachi"
};

const { name: studentName, age: studentAge } = student;

console.log(studentName); // → Hassan
console.log(studentAge);  // → 21
```


### 2. Computed Property Names
   - You can use computed property names when defining objects, which allows dynamic creation of property keys.

   ```javascript
   let prop = "name";
   let student = {
     [prop]: "Hassan",
     age: 21
   };

   console.log(student.name); // → Hassan
   ```

### 3. Method Definitions in Objects
   - You can define methods (functions) directly within an object.

   ```javascript
   let student = {
     name: "Hassan",
     greet() {
       console.log(`Hello, my name is ${this.name}`);
     }
   };

   student.greet(); // → Hello, my name is Hassan
   ```

### 4. Object Freezing
   - `Object.freeze()` prevents modifications to an object, making it immutable.

   ```javascript
   let student = { name: "Hassan" };
   Object.freeze(student);

   student.name = "Ali"; // This won't change the name
   console.log(student.name); // → Hassan
   ```

### 5. Object Sealing
   - `Object.seal()` prevents adding or removing properties from an object, but allows modification of existing properties.

   ```javascript
   let student = { name: "Hassan" };
   Object.seal(student);

   student.age = 21; // This won't add a new property
   student.name = "Ali"; // This will modify the existing property

   console.log(student); // → { name: "Ali" }
   ```

### 6. Object Iteration
   - You can iterate over the properties of an object using a `for...in` loop.

   ```javascript
   let student = { name: "Hassan", age: 21, city: "Karachi" };

   for (let key in student) {
     console.log(`${key}: ${student[key]}`);
   }
   // Output:
   // name: Hassan
   // age: 21
   // city: Karachi
   ```

### 7. Object Methods
   - JavaScript provides several built-in methods for objects, such as `Object.keys()`, `Object.values()`, and `Object.entries()`.

   ```javascript
   let student = { name: "Hassan", age: 21, city: "Karachi" };

   console.log(Object.keys(student));   // → ["name", "age", "city"]
   console.log(Object.values(student)); // → ["Hassan", 21, "Karachi"]
   console.log(Object.entries(student));// → [["name", "Hassan"], ["age", 21], ["city", "Karachi"]]
   ```

### 8. Cloning Objects
   - You can clone objects using the spread operator or `Object.assign()`.

   ```javascript
   let student = { name: "Hassan", age: 21 };
   let clone1 = { ...student }; // Using spread operator
   let clone2 = Object.assign({}, student); // Using Object.assign()

   console.log(clone1); // → { name: "Hassan", age: 21 }
   console.log(clone2); // → { name: "Hassan", age: 21 }
   ```


### 10. Objects as Function Parameters
   - Objects can be passed as parameters to functions, allowing you to pass multiple values in a single argument.

   ```javascript
   function printStudentDetails({ name, age, city }) {
     console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
   }

   let student = { name: "Hassan", age: 21, city: "Karachi" };
   printStudentDetails(student);
   // → Name: Hassan, Age: 21, City: Karachi
   ```

---

These advanced object concepts provide a deeper understanding of how to work with objects in JavaScript. They cover a range of topics from destructuring and method definitions to object freezing, sealing, and prototypes, offering valuable techniques for effective data management.