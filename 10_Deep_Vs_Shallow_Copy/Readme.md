
# Deep Copy vs Shallow Copy in JavaScript

## Introduction

When working with objects and arrays in JavaScript, understanding the difference between deep copy and shallow copy is crucial. These concepts determine how data structures are duplicated and how changes to copies affect the original data.

### Shallow Copy

A **shallow copy** of an object or array creates a new object/array with references to the same elements as the original. This means that if the original object contains other objects (nested objects), the shallow copy will only duplicate the references to these nested objects, not the objects themselves.

#### Example of Shallow Copy

```javascript
// Creating an object
let originalObject = {
  name: "Ali",
  address: {
    city: "Islamabad",
    country: "Pakistan"
  }
};

// Shallow copying the object using Object.assign
let shallowCopy = Object.assign({}, originalObject);

// Modifying the nested object in the shallow copy
shallowCopy.address.city = "Lahore";

console.log(originalObject.address.city); // Output: "Lahore"
```

In this example, modifying the `city` property in `shallowCopy` also modifies the `city` in `originalObject` because both objects share the same reference to the `address` object.

#### Shallow Copy Methods

Some common methods to create shallow copies in JavaScript include:

- `Object.assign()`
- The spread operator (`...`)

### Deep Copy

A **deep copy** creates a new object or array with copies of all the elements, including nested objects and arrays. This means that changes made to the deep copy do not affect the original object or array.

#### Example of Deep Copy

```javascript
// Creating an object
let originalObject = {
  name: "Ahmed",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};

// Deep copying the object using JSON.parse(JSON.stringify())
let deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the nested object in the deep copy
deepCopy.address.city = "Quetta";

console.log(originalObject.address.city); // Output: "Karachi"
```

In this example, modifying the `city` property in `deepCopy` does not affect the `originalObject`, because `deepCopy` contains a complete copy of the `address` object, not just a reference.

#### Deep Copy Methods

To perform a deep copy in JavaScript, you can use:

- `JSON.parse(JSON.stringify())` (simple objects and arrays)
- Libraries like Lodash (`_.cloneDeep`)

## Summary

- **Shallow Copy**: Copies only the references to nested objects, not the objects themselves.
- **Deep Copy**: Creates a full copy of the original object, including all nested objects.

Understanding when to use a deep copy versus a shallow copy is essential to avoid unintended side effects in your JavaScript code. In cases where nested objects are involved, and you want to prevent changes from affecting the original structure, a deep copy is the better option.

