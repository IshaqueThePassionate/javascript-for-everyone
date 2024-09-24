# JavaScript Objects as Reference Types

In JavaScript, objects are called reference types because when you assign an object to a variable, the variable holds a reference to the memory location where the object is stored, rather than the object itself. This means that if you assign the same object to another variable, both variables point to the same object in memory. As a result, any changes made to the object through one variable will be reflected in the other, because they both refer to the same underlying data. This shared reference is what makes objects mutable and different from primitive types, where each variable holds its own independent copy of the value.



 Here are the important aspects of reference types in JavaScript :
  

### 1. **Mutability**

- Objects (including arrays and functions) in JavaScript are mutable, meaning you can change their properties or elements after they have been created.
- Since variables hold references to objects, modifying an object through one variable will reflect those changes across all references to that object.

### 2. **Comparison of Objects**

- When comparing two objects with `==` or `===`, JavaScript checks whether the references are the same, not whether the contents are identical.
- Two different objects with the same properties and values are not equal because they have different references.
  
<br>

```javascript
let obj1 = { name: "Ali" };
let obj2 = { name: "Ali" };
console.log(obj1 === obj2); // false
```

---

This text covers the points on mutability and comparison of objects in JavaScript.


## Example:

### Step 1: Create an Object

```plaintext
+-------------------+
| person            | 
|                   | 
| {                 |
|   name: "Ali",    |
|   age: 25         |
| }                 |
+-------------------+
```

### Step 2: Assign `person` to `person1`

```javascript
person1 = person;
```

### Step 3: Both `person` and `person1` point to the same object

```plaintext
+-----------+             +---------------------------+
| person    |             |  Object in Memory         |
|           |  ---------> |  { name: "Ali", age: 25 } |
|           |             |                           |
+-----------+             +---------------------------+
      |
      |
      v
+-----------+
| person1   |
|           |
|           |
+-----------+
```

### Explanation

1. **Step 1**: An object named `person` is created with properties `name` and `age`.
2. **Step 2**: The object `person` is assigned to a new variable `person1` using the assignment `person1 = person;`.
3. **Step 3**: The diagram shows that both `person` and `person1` are referencing (pointing) to the same object in memory.







