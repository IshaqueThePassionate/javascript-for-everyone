## Nested Objects in JavaScript

In JavaScript, objects can contain other objects as properties, creating a nested structure. This allows you to model more complex data structures where each object can hold multiple levels of related information.

### Example: Creating and Accessing Nested Objects

```javascript
let student = {
  name: "Hassan",
  age: 21,
  address: {
    city: "Karachi",
    street: "Main Street",
    postalCode: "75500"
  },
  courses: {
    math: {
      teacher: "Mr. Ahmed",
      grade: "A"
    },
    physics: {
      teacher: "Ms. Fatima",
      grade: "B+"
    }
  }
};

// Accessing properties in a nested object
console.log(student.name); // → Hassan
console.log(student.address.city); // → Karachi
console.log(student.courses.math.teacher); // → Mr. Ahmed
```

### Explanation:

1. **Creating a Nested Object:**
   The `student` object contains properties such as `name` and `age`, but it also contains other objects like `address` and `courses`.

   ```javascript
   let student = {
     name: "Hassan",
     age: 21,
     address: {
       city: "Karachi",
       street: "Main Street",
       postalCode: "75500"
     },
     courses: {
       math: {
         teacher: "Mr. Ahmed",
         grade: "A"
       },
       physics: {
         teacher: "Ms. Fatima",
         grade: "B+"
       }
     }
   };
   ```

2. **Accessing Nested Properties:**
   To access properties within a nested object, use dot notation multiple times to drill down to the property you want.

   ```javascript
   console.log(student.name); // → Hassan
   console.log(student.address.city); // → Karachi
   console.log(student.courses.math.teacher); // → Mr. Ahmed
   ```

### Adding or Modifying Properties in Nested Objects

You can also dynamically add or modify properties within a nested object.

```javascript
student.address.street = "Second Street"; // Modify an existing property
student.courses.chemistry = { teacher: "Mr. Ali", grade: "A-" }; // Add a new nested object

console.log(student.address.street); // → Second Street
console.log(student.courses.chemistry.teacher); // → Mr. Ali
```

### Explanation:

1. **Modifying an Existing Property:**
   You can modify an existing nested property just like any other property using dot notation.

   ```javascript
   student.address.street = "Second Street";
   ```

2. **Adding a New Nested Object:**
   You can also add new nested objects or properties within existing objects.

   ```javascript
   student.courses.chemistry = { teacher: "Mr. Ali", grade: "A-" };
   ```

### Result:

The `student` object now contains the updated and new nested properties.

```javascript
console.log(student.address.street); // → Second Street
console.log(student.courses.chemistry.teacher); // → Mr. Ali
```

Nested objects are a powerful way to organize complex data structures in JavaScript, allowing you to represent real-world entities in a hierarchical manner.